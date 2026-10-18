import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projectPublicPath } from "@/lib/project-markdown";
import { publicFile } from "@/lib/paths";

type ProjectMarkdownProps = {
  slug: string;
  children: string;
};

export function ProjectMarkdown({ slug, children }: ProjectMarkdownProps) {
  const components: Components = {
    a: ({ href, children: linkChildren, ...rest }) => {
      const { node: _markdownNode, ...domProps } = rest as typeof rest & { node?: unknown };
      void _markdownNode;
      const resolved = resolveMarkdownHref(slug, href);
      if (!resolved) {
        return <span {...domProps}>{linkChildren}</span>;
      }
      const external = isExternalHref(resolved);
      return (
        <a
          {...domProps}
          href={resolved}
          className="project-prose-link"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {linkChildren}
        </a>
      );
    },
    img: ({ src, alt, ...rest }) => {
      if (typeof src !== "string" || !src) return null;
      const { node: _markdownNode, ...domProps } = rest as typeof rest & { node?: unknown };
      void _markdownNode;
      const publicPath = projectPublicPath(slug, src);
      const url = isExternalHref(publicPath) ? publicPath : publicFile(publicPath);
      return <img {...domProps} src={url} alt={alt ?? ""} className="w-full" />;
    },
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
}

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function looksLikeBareHostname(href: string): boolean {
  return /^[\w.-]+\.[a-z]{2,}([/?#].*)?$/i.test(href);
}

function resolveMarkdownHref(slug: string, href: string | undefined): string {
  if (!href) return "";

  const trimmed = href.trim();
  if (!trimmed) return "";

  if (isExternalHref(trimmed)) return trimmed;
  if (trimmed.startsWith("//")) return `https:${trimmed}`;
  if (trimmed.startsWith("#") || trimmed.startsWith("?")) return trimmed;
  if (trimmed.startsWith("/")) return publicFile(trimmed);
  if (looksLikeBareHostname(trimmed)) {
    return `https://${trimmed.replace(/^\/\//, "")}`;
  }

  return publicFile(projectPublicPath(slug, trimmed));
}
