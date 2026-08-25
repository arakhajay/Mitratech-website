"use client";

import React, { useEffect, useRef, useState } from "react";

const randomColors = (count: number) => {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"));
};

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({
  children,
  className = "",
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    let cleanupFn: (() => void) | undefined;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // Load locally saved public script for zero-latency instant execution
        const localUrl = "/tubes1.min.js";
        const dynamicImport = new Function("url", "return import(url)");
        const module = await dynamicImport(localUrl);
        const TubesCursor = module.default;

        if (!mounted || !canvasRef.current) return;

        const canvas = canvasRef.current;

        const app = TubesCursor(canvas, {
          tubes: {
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            lights: {
              intensity: 200,
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
            },
          },
        });

        tubesRef.current = app;
        setIsLoaded(true);

        const handleResize = () => {
          if (app && typeof app.resize === "function") {
            app.resize();
          }
        };

        window.addEventListener("resize", handleResize);

        cleanupFn = () => {
          window.removeEventListener("resize", handleResize);
          if (app && typeof app.dispose === "function") {
            app.dispose();
          }
        };
      } catch (error) {
        console.error("Failed to load TubesCursor module:", error);
      }
    };

    const timer = setTimeout(() => {
      initTubes();
    }, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
      if (cleanupFn) cleanupFn();
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;

    try {
      const colors = randomColors(3);
      const lightsColors = randomColors(4);

      if (tubesRef.current.tubes?.setColors) {
        tubesRef.current.tubes.setColors(colors);
      }
      if (tubesRef.current.tubes?.setLightsColors) {
        tubesRef.current.tubes.setLightsColors(lightsColors);
      }
    } catch (err) {
      console.warn("Tubes click interaction error:", err);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[400px] overflow-hidden ${className}`}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0"
        style={{ touchAction: "none", width: "100%", height: "100%" }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
