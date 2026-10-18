import Link from "next/link";
import type { Project } from "@/content/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block py-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <h3 className="project-card-title font-mono text-base font-medium">
          {project.title}
        </h3>
        {project.dates ? (
          <p className="shrink-0 font-mono text-sm text-muted sm:text-right">
            {project.dates}
          </p>
        ) : null}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      {project.tools.length > 0 ? (
        <p className="project-card-tools mt-1 font-mono text-xs text-muted">{project.tools.join(", ")}</p>
      ) : null}
    </Link>
  );
}
