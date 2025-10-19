import { GitService } from "../../infrastructure/git/gitService";

export class RepoService {
  static async syncRepo(repoUrl: string) {
    return GitService.syncRepo(repoUrl);
  }

  static async pushChanges(message: string) {
    return GitService.pushChanges(message);
  }
}
