import { Request, Response } from "express";
import { RepoService } from "../../domain/services/repoService";

export const syncRepo = async (req: Request, res: Response): Promise<void> => {
  const { repoUrl } = req.body;
  try {
    const result = await RepoService.syncRepo(repoUrl);
    res.status(200).json(result);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const pushChanges = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { message } = req.body;
  try {
    const result = await RepoService.pushChanges(message);
    res.status(200).json(result);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
};
