import { ProjectCard } from "@/components/ProjectCard";
import { projects, type Project } from "@/content/site";

type ProjectListProps = {
  group?: Project["group"];
  /** Home list of entries with `pinned: true`, in array order. */
  pinned?: boolean;
};

function ProjectGroup({ label, items }: { label: string; items: Project[] }) {
  if (items.length === 0) return null;

  return (
    <div>
      <h2 className="section-title !mb-4">{label}</h2>
      <ul className="divide-y divide-border">
        {items.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectList({ group, pinned }: ProjectListProps = {}) {
  if (pinned) {
    return <ProjectGroup label="Pinned" items={projects.filter((project) => project.pinned)} />;
  }

  const source = projects.filter((project) => {
    if (project.pinned) return false;
    return group ? project.group === group : true;
  });

  const groups: { label: Project["group"]; items: Project[] }[] = [];
  for (const project of source) {
    const last = groups[groups.length - 1];
    if (!last || last.label !== project.group) {
      groups.push({ label: project.group, items: [project] });
    } else {
      last.items.push(project);
    }
  }

  if (groups.length === 0) return null;

  return (
    <div className="space-y-10">
      {groups.map((entry) => (
        <ProjectGroup key={entry.label} label={entry.label} items={entry.items} />
      ))}
    </div>
  );
}
