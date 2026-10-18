import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ProjectFigure, ProjectLink } from "@/content/site";

export type ProjectFile = {
  label: string;
  path: string;
};

export type ProjectPageContent = {
  body: string;
  links: ProjectLink[];
  figures: ProjectFigure[];
  files: ProjectFile[];
};

const CONTENT_DIR = path.join(process.cwd(), "src/content/projects");

function normalizeLinks(raw: unknown): ProjectLink[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is ProjectLink => {
      if (!item || typeof item !== "object") return false;
      const link = item as ProjectLink;
      return typeof link.label === "string" && typeof link.href === "string";
    })
    .map((link) => ({ label: link.label.trim(), href: link.href.trim() }))
    .filter((link) => link.label && link.href);
}

function normalizeFigures(raw: unknown): ProjectFigure[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is ProjectFigure => {
      if (!item || typeof item !== "object") return false;
      const figure = item as ProjectFigure;
      return typeof figure.src === "string" && typeof figure.alt === "string";
    })
    .map((figure) => ({ src: figure.src.trim(), alt: figure.alt.trim() }))
    .filter((figure) => figure.src);
}

function normalizeFiles(raw: unknown): ProjectFile[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is ProjectFile => {
      if (!item || typeof item !== "object") return false;
      const file = item as ProjectFile;
      return typeof file.label === "string" && typeof file.path === "string";
    })
    .map((file) => ({ label: file.label.trim(), path: file.path.trim() }))
    .filter((file) => file.label && file.path);
}

export function projectMarkdownPath(slug: string): string {
  return path.join(CONTENT_DIR, `${slug}.md`);
}

export function hasProjectMarkdown(slug: string): boolean {
  return fs.existsSync(projectMarkdownPath(slug));
}

export function getProjectPageContent(slug: string): ProjectPageContent | undefined {
  const filePath = projectMarkdownPath(slug);
  if (!fs.existsSync(filePath)) return undefined;

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    body: content.trim(),
    links: normalizeLinks(data.links),
    figures: normalizeFigures(data.figures),
    files: normalizeFiles(data.files),
  };
}

export function projectPublicPath(slug: string, assetPath: string): string {
  const trimmed = assetPath.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  if (trimmed.startsWith("/")) return trimmed;
  const relative = trimmed.replace(/^\.\//, "");
  return `/projects/${slug}/${relative}`;
}
