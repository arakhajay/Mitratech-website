"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Palette,
  Code2,
  Cpu,
  Share2,
  PenTool,
  Target,
  ArrowRight,
  Sparkles,
  Bot,
  Search,
  ExternalLink,
} from "lucide-react";
import { QuickConsultModal } from "@/components/ui/QuickConsultModal";
import { SERVICES_DATA } from "@/constants/servicesData";
import { PRODUCTS_DATA } from "@/constants/productsData";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Share2: <Share2 className="w-5 h-5 text-pink-400" />,
  PenTool: <PenTool className="w-5 h-5 text-amber-400" />,
  Target: <Target className="w-5 h-5 text-emerald-400" />,
  Bot: <Bot className="w-5 h-5 text-cyan-400" />,
  Search: <Search className="w-5 h-5 text-purple-400" />,
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: "services" },
    { name: "Products", href: "/products", hasDropdown: "products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-navbar py-3 shadow-lg shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - MitraTech without Digital Solutions */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-white tracking-tight">
                Mitra<span className="text-blue-500">Tech</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown === "services") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown("services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                      className={`flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                        pathname.startsWith("/services")
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === "services" ? "rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </button>

                    {/* Services Mega Menu Dropdown */}
                    {activeDropdown === "services" && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] pt-3 animate-fadeIn">
                        <div className="p-5 rounded-2xl glass-panel border border-slate-700/80 shadow-2xl grid grid-cols-2 gap-3">
                          {SERVICES_DATA.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all group"
                            >
                              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                                {iconMap[service.iconName]}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                                  <span className="truncate">{service.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400 shrink-0" />
                                </div>
                                <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasDropdown === "products") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown("products")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
                      className={`flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                        pathname.startsWith("/products")
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="px-1.5 py-0.2 text-[9px] font-bold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        NEW
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === "products" ? "rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </button>

                    {/* Products Mega Menu Dropdown */}
                    {activeDropdown === "products" && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] pt-3 animate-fadeIn">
                        <div className="p-4 rounded-2xl glass-panel border border-slate-700/80 shadow-2xl space-y-3">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
                            Proprietary SaaS Solutions
                          </div>

                          <div className="space-y-2">
                            {PRODUCTS_DATA.map((product) => (
                              <div
                                key={product.id}
                                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-between group"
                              >
                                <Link
                                  href={`/products/${product.slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-start space-x-3 flex-1"
                                >
                                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform">
                                    {iconMap[product.iconName]}
                                  </div>
                                  <div>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {product.name}
                                      </span>
                                      <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-[10px] font-semibold text-cyan-300 border border-blue-500/20">
                                        {product.badge}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                      {product.shortDescription}
                                    </p>
                                  </div>
                                </Link>

                                <a
                                  href={product.externalUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors shrink-0 ml-3"
                                  title={`Visit ${product.name} Official Website`}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            ))}
                          </div>

                          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between px-2">
                            <Link
                              href="/products"
                              onClick={() => setActiveDropdown(null)}
                              className="text-xs font-semibold text-cyan-400 hover:text-blue-400 flex items-center space-x-1 transition-colors"
                            >
                              <span>Explore All SaaS Products</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>

                            <span className="text-[10px] text-slate-500">Mitratech Services (OPC) Pvt Ltd</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all transform hover:scale-105 active:scale-95"
            >
              Get Free Quote
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass-panel border-b border-slate-800 px-4 py-6 mt-3 max-h-[85vh] overflow-y-auto animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800"
                  >
                    {link.name}
                  </Link>

                  {link.hasDropdown === "services" && (
                    <div className="pl-4 pr-2 py-1 space-y-1">
                      {SERVICES_DATA.map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-2 py-2 px-3 rounded-lg text-xs text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span>{srv.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {link.hasDropdown === "products" && (
                    <div className="pl-4 pr-2 py-1 space-y-1.5">
                      {PRODUCTS_DATA.map((prod) => (
                        <div key={prod.id} className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-900/50">
                          <Link
                            href={`/products/${prod.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs text-cyan-300 font-semibold hover:underline"
                          >
                            {prod.name}
                          </Link>
                          <a
                            href={prod.externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] text-slate-400 flex items-center space-x-1 hover:text-white"
                          >
                            <span>Launch</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-md"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quick Consultation Modal */}
      <QuickConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
