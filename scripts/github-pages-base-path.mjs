export function githubPagesBasePath() {
  const override = process.env.NEXT_PUBLIC_BASE_PATH;
  if (override !== undefined) {
    if (!override || override === "/") return "";
    return override.startsWith("/") ? override.replace(/\/$/, "") : `/${override}`;
  }

  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (process.env.GITHUB_PAGES === "true" && repo && !repo.endsWith(".github.io")) {
    return `/${repo}`;
  }

  return "";
}
