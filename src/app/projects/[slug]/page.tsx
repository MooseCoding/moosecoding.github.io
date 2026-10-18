import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPageContent } from "@/components/ProjectPageContent";
import { getAllProjectSlugs, getProject } from "@/lib/projects";
import { getProjectPageContent } from "@/lib/project-markdown";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const page = getProjectPageContent(slug);

  if (!project || !page) {
    notFound();
  }

  return <ProjectPageContent project={project} page={page} />;
}
