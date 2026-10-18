import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="site-chrome sticky top-0 z-10 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-[var(--site-header-y)]">
        <Link
          href="/"
          className="truncate font-mono text-sm font-medium tracking-tight text-ink"
        >
          {site.name}
        </Link>

        <nav
          aria-label="Site"
          className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-1 gap-y-1 font-mono text-sm sm:gap-x-3"
        >
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
          <Link href="/resume" className="nav-link">Resume</Link>
        </nav>
      </div>
    </header>
  );
}
