import Link from "next/link";
import { HeroSubtitle } from "@/components/HeroSubtitle";
import { TypedName } from "@/components/TypedName";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="site-section">
      <div className="site-container site-hero-pad">
        <TypedName text={site.name} />

        <HeroSubtitle />
        <p className="mt-1 font-mono text-sm text-muted">{site.hero.statusLine}</p>

        {site.hiringHeadline ? (
          <p className="mt-6 text-base leading-relaxed text-ink">{site.hiringHeadline}</p>
        ) : null}

        <p className="mt-6 text-base leading-relaxed text-ink">{site.bio}</p>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
          <Link href="/resume" className="link-muted">Resume</Link>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
