import Link from "next/link";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact">
      <div className="site-container site-section-pad">
        <h2 className="section-title !mb-2">Contact</h2>
        {site.hiringContact ? (
          <p className="mb-4 text-sm text-muted">{site.hiringContact}</p>
        ) : null}
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a
            href={`mailto:${site.links.email}`}
            className="font-medium text-ink underline-offset-4 hover:underline"
          >
            {site.links.email}
          </a>
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
