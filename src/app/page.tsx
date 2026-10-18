import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { Experience } from "@/components/Experience";
import { SkillsTable } from "@/components/SkillsTable";
import { Contact } from "@/components/Contact";
import { projects } from "@/content/site";

export default function HomePage() {
  const hasUnpinnedClubs = projects.some((project) => project.group === "Clubs" && !project.pinned);

  return (
    <>
      <Hero />
      <section id="projects" className="site-section">
        <div className="site-container site-section-pad space-y-10">
          <ProjectList pinned />
          <ProjectList group="Projects" />
        </div>
      </section>
      <Experience />
      {hasUnpinnedClubs ? (
        <section id="clubs" className="site-section">
          <div className="site-container site-section-pad">
            <ProjectList group="Clubs" />
          </div>
        </section>
      ) : null}
      <SkillsTable />
      <Contact />
    </>
  );
}
