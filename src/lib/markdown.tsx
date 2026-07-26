import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

interface DescriptionMarkdownProps {
  content: string;
  className?: string;
}

export function DescriptionMarkdown({ content, className }: DescriptionMarkdownProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          p: ({ ...props }) => <p className="mb-4 last:mb-0" {...props} />,
          a: ({ ...props }) => (
            <a
              className="text-primary-orange underline hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          ul: ({ ...props }) => <ul className="list-disc list-inside space-y-1 mb-4" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal list-inside space-y-1 mb-4" {...props} />,
          h1: ({ ...props }) => <h1 className="text-2xl font-bold mt-4 mb-3" {...props} />,
          h2: ({ ...props }) => <h2 className="text-xl font-bold mt-4 mb-3" {...props} />,
          h3: ({ ...props }) => <h3 className="text-lg font-semibold mt-3 mb-2" {...props} />,
          strong: ({ ...props }) => <strong className="font-semibold" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-primary-orange pl-4 italic my-4" {...props} />
          ),
          code: ({ ...props }) => <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

/** Collapses markdown syntax down to plain text, for truncated previews (e.g. list cards). */
export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/[*_~]/g, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/\r?\n+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}
