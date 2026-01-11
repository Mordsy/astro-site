import { defineConfig } from "astro/config";

// In GitHub Actions: "owner/repo"
const repoSlug = process.env.GITHUB_REPOSITORY || "";
const [owner, repo] = repoSlug.split("/");

const isCI = Boolean(process.env.GITHUB_ACTIONS);

// If deploying to owner.github.io (repo named owner.github.io), base should be "/"
const isUserOrOrgPagesRepo =
  owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const base = isCI ? (isUserOrOrgPagesRepo ? "/" : `/${repo}`) : "/";

export default defineConfig({
  base,
  trailingSlash: "always",
});
