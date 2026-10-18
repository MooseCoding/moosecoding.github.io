"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { publicFile } from "@/lib/paths";

export function ResumeActions() {
  return (
    <div className="resume-actions mb-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
      <button
        type="button"
        onClick={() => window.print()}
        className="font-medium text-ink underline-offset-4 hover:underline"
      >
        Print
      </button>
      <Link href="/" className="link-muted">Portfolio</Link>
      <a
        href={publicFile(site.links.resume)}
        target="_blank"
        rel="noopener noreferrer"
        className="link-muted"
      >
        PDF
      </a>
    </div>
  );
}
