import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    div: [...(defaultSchema.attributes?.div ?? []), "align"],
    p: [...(defaultSchema.attributes?.p ?? []), "align"],
    img: [...(defaultSchema.attributes?.img ?? []), "align", "width", "height"],
  },
};

export function Markdown({ children }: { children: string }) {
  return (
    <div className="min-w-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
        components={{
          h1: ({ children }) => (
            <h2 className="font-display font-bold text-white text-xl md:text-2xl mt-8 mb-4 first:mt-0">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h3 className="font-display font-bold text-white text-lg md:text-xl mt-8 mb-3 first:mt-0">
              {children}
            </h3>
          ),
          h3: ({ children }) => (
            <h4 className="font-display font-bold text-white text-base md:text-lg mt-6 mb-2">
              {children}
            </h4>
          ),
          p: ({ children, align }: { children?: React.ReactNode; align?: string }) => (
            <p
              className={`text-[#a0a0a0] font-body text-sm md:text-base leading-relaxed mb-4 ${
                align === "center"
                  ? "flex flex-col items-center text-center gap-3"
                  : ""
              }`}
            >
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00a8ff] hover:underline"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 mb-4 space-y-1.5 text-[#a0a0a0] font-body text-sm md:text-base leading-relaxed">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 mb-4 space-y-1.5 text-[#a0a0a0] font-body text-sm md:text-base leading-relaxed">
              {children}
            </ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          strong: ({ children }) => (
            <strong className="text-white font-semibold">{children}</strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-[#e91e8c]/40 pl-4 italic text-[#a0a0a0] mb-4">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isBlock = /language-/.test(className || "");
            if (isBlock) {
              return <code className={className}>{children}</code>;
            }
            return (
              <code className="font-mono text-[#e91e8c] bg-black/40 rounded px-1.5 py-0.5 text-[0.85em]">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="glass rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono text-[#c0c0c0] border border-white/10">
              {children}
            </pre>
          ),
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt ?? ""}
              loading="lazy"
              className="max-w-full h-auto rounded-lg my-4 border border-white/10"
            />
          ),
          hr: () => <hr className="border-white/10 my-8" />,
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="text-left text-white font-display font-semibold border-b border-white/10 px-3 py-2">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="text-[#a0a0a0] font-body border-b border-white/5 px-3 py-2 align-top">
              {children}
            </td>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
