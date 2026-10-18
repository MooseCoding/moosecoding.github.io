import type { Metadata } from "next";
import { resume, site } from "@/content/site";
import { ResumeActions } from "@/components/ResumeActions";

export const metadata: Metadata = {
  title: "Resume",
  description: `${site.name}. ${resume.education[0].degree}. ${resume.education[0].location}.`,
};

export default function ResumePage() {
  return (
    <article className="resume-page site-container site-section-pad">
      <ResumeActions />

      <header className="resume-block border-b border-border pb-6">
        <h1 className="font-mono text-2xl font-medium tracking-tight text-ink">{site.name}</h1>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <span className="text-muted">{site.location}</span>
          <a
            href={`mailto:${site.links.email}`}
            className="text-ink underline-offset-4 hover:underline"
          >
            {site.links.email}
          </a>
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
      </header>

      <section className="resume-block mt-8">
        <h2 className="resume-heading">Education</h2>
        <ul className="space-y-4">
          {resume.education.map((entry) => (
            <li key={entry.school} className="resume-entry">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <p className="font-mono font-medium text-ink">{entry.school}</p>
                <p className="shrink-0 font-mono text-sm text-muted">{entry.dates}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <p className="font-mono text-sm text-muted">{entry.degree}</p>
                <p className="shrink-0 font-mono text-sm text-muted">{entry.location}</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                Relevant Coursework: {entry.coursework}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-block mt-8">
        <h2 className="resume-heading">Clubs & Activities</h2>
        <ul className="space-y-4">
          {resume.clubs.map((club) => (
            <li key={club.title} className="resume-entry text-sm leading-relaxed">
              <span className="font-mono font-medium text-ink">{club.title}</span>
              {" – "}
              <span className="text-muted">{club.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-block mt-8">
        <h2 className="resume-heading">Projects</h2>
        <ul className="space-y-5">
          {resume.projects.map((project) => (
            <li key={project.title} className="resume-entry">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-mono font-medium text-ink">{project.title}</h3>
                <p className="shrink-0 font-mono text-sm text-muted">{project.dates}</p>
              </div>
              <p className="font-mono text-xs text-muted">{project.tools.join(" · ")}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-block mt-8">
        <h2 className="resume-heading">Experience</h2>
        <ul className="space-y-5">
          {resume.experience.map((item) => (
            <li key={item.title} className="resume-entry">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-mono font-medium text-ink">{item.title}</h3>
                <p className="shrink-0 font-mono text-sm text-muted">{item.dates}</p>
              </div>
              <p className="font-mono text-sm text-muted">{item.place}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-block mt-8">
        <h2 className="resume-heading">Technical Skills</h2>
        <ul className="space-y-2 text-sm text-muted">
          {resume.skills.map((group) => (
            <li key={group.category} className="resume-entry">
              <span className="font-mono font-medium text-ink">{group.category}:</span>{" "}
              {group.items.join(", ")}
            </li>
          ))}
        </ul>
      </section>

    </article>
  );
}
