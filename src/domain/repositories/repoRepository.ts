export interface RepoRepository {
  sync(repoUrl: string): Promise<string>;
  push(message: string): Promise<string>;
}
