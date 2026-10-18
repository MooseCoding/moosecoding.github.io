import Link from "next/link";
import { site } from "@/content/site";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-muted">
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="site-chrome border-t border-border bg-surface">
      <div className="site-container flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{site.footer.footerText}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-1 font-mono">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-4 gap-y-1 sm:justify-end">
          <ExternalLink href={site.links.github}>GitHub</ExternalLink>
          <ExternalLink href={site.links.linkedin}>LinkedIn</ExternalLink>
          <a
            href={`mailto:${site.links.email}`}
            className="link-muted"
          >
            {site.links.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
