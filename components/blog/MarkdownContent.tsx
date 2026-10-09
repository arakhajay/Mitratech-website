"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const components: Components = {
    a: ({ node, href, children, ...props }) => {
      if (!href) return <a {...props}>{children}</a>;

      const isInternal = href.startsWith("/") || href.includes("mitratechservices.in");
      const isExternal = !isInternal;

      return (
        <a
          href={href}
          className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...props}
        >
          {children}
        </a>
      );
    },
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-4 font-heading">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-6 mb-3 font-heading">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-white mt-5 mb-2 font-heading">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg sm:text-xl font-bold text-white mt-4 mb-2 font-heading">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-slate-300 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-4 ml-4">
        {children}
      </ol>
    ),
    li: ({ children, className }) => {
      const isTaskListItem = className?.includes("task-list-item");
      return (
        <li className={`${isTaskListItem ? "list-none -ml-4" : ""}`}>
          {children}
        </li>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-slate-400 my-4">
        {children}
      </blockquote>
    ),
    code: ({ inline, children, ...props }: any) => {
      return inline ? (
        <code
          className="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded text-sm"
          {...props}
        >
          {children}
        </code>
      ) : (
        <code
          className="block bg-slate-900 text-slate-300 p-4 rounded-lg overflow-x-auto text-sm my-4"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="bg-slate-900 rounded-lg overflow-x-auto my-4">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-slate-800 my-8" />,
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-slate-200">{children}</em>
    ),
  };

  return (
    <div className="prose prose-invert prose-blue max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
