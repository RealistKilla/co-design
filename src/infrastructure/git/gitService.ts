import { simpleGit, SimpleGit, CleanOptions } from "simple-git";
import path from "path";

const git: SimpleGit = simpleGit().clean(CleanOptions.FORCE);

export const GitService = {
  async syncRepo(repoUrl: string) {
    const localPath = path.join(__dirname, "path/to/local/repo");

    try {
      if (!(await git.checkIsRepo())) {
        await git.clone(repoUrl, localPath);
      }

      git.cwd(localPath);
      await git.fetch();

      const status = await git.status();
      if (status.isClean()) {
        await git.pull();
        return { message: "Repo updated successfully." };
      }

      return { message: "Local changes detected; please commit or revert." };
    } catch (error: unknown) {
      throw new Error(
        `Error syncing repo: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  },

  async pushChanges(message: string) {
    const localPath = path.join(__dirname, "path/to/local/repo");
    try {
      git.cwd(localPath);
      await git.add("./*");
      await git.commit(message);
      await git.push("origin", "main");
      return { message: "Changes pushed successfully." };
    } catch (error: unknown) {
      throw new Error(
        `Error pushing changes: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  },
};
