import Link from "next/link";
import type { Project } from "@/content/site";
import type { ProjectPageContent as ProjectPage } from "@/lib/project-markdown";
import { projectPublicPath } from "@/lib/project-markdown";
import { publicFile } from "@/lib/paths";
import { ProjectMarkdown } from "@/components/ProjectMarkdown";
import { ProjectPageHeading } from "@/components/ProjectPageHeading";

type Props = {
  project: Project;
  page: ProjectPage;
};

export function ProjectPageContent({ project, page }: Props) {
  const meta = [project.role, project.dates].filter(Boolean).join(" · ");

  return (
    <article>
      <div className="site-container site-section-pad sm:py-16">
        <p className="mb-8 text-sm">
          <Link href="/" className="link-muted">Back to portfolio</Link>
        </p>

        <ProjectPageHeading
          title={project.title}
          meta={meta}
          tools={project.tools}
          links={page.links}
        />

        {page.figures.length > 0 ? (
          <div className="mt-8 space-y-4">
            {page.figures.map((figure) => (
              <img
                key={figure.src}
                src={publicFile(projectPublicPath(project.slug, figure.src))}
                alt={figure.alt}
                className="w-full"
              />
            ))}
          </div>
        ) : null}

        {page.body ? (
          <div className="project-prose mt-8">
            <ProjectMarkdown slug={project.slug}>{page.body}</ProjectMarkdown>
          </div>
        ) : null}

        {page.files.length > 0 ? (
          <div className="mt-10">
            <h2 className="section-title !mb-3">Files</h2>
            <ul className="mt-3 space-y-2">
              {page.files.map((file) => {
                const href = publicFile(projectPublicPath(project.slug, file.path));
                return (
                  <li key={`${file.label}-${file.path}`}>
                    <a
                      href={href}
                      className="project-page-link"
                      download
                    >
                      {file.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
