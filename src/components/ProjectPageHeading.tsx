"use client";

import { useCallback, useState } from "react";
import type { ProjectLink } from "@/content/site";
import { DecodeText } from "@/components/DecodeText";

export function ProjectPageHeading({
  title,
  meta,
  tools,
  links,
}: {
  title: string;
  meta: string;
  tools: string[];
  links: ProjectLink[];
}) {
  const [locked, setLocked] = useState(false);
  const onLocked = useCallback(() => setLocked(true), []);

  return (
    <>
      <h1
        className={`decode-heading font-mono text-3xl font-medium tracking-tight sm:text-4xl${locked ? " is-locked" : ""}`}
      >
        <DecodeText text={title} onLocked={onLocked} />
      </h1>

      {meta ? (
        <p className={`project-intro-rest mt-2 font-mono text-sm text-muted${locked ? " is-visible" : ""}`}>
          {meta}
        </p>
      ) : null}

      {tools.length > 0 ? (
        <ul
          className={`project-tool-tags project-intro-rest${locked ? " is-visible" : ""}`}
          aria-label="Tools and technologies"
        >
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      ) : null}

      {links.length > 0 ? (
        <p className={`project-page-links project-intro-rest${locked ? " is-visible" : ""}`}>
          {links.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-page-link"
            >
              {link.label}
            </a>
          ))}
        </p>
      ) : null}
    </>
  );
}
