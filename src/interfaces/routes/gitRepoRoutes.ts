import { Router } from "express";
import { syncRepo, pushChanges } from "../controllers/gitRepoController";

const router = Router();

router.post("/sync", syncRepo);
router.post("/push", pushChanges);

export { router as repoRoutes };
