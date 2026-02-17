import { Router } from "express";
import { controller } from "./controllers.js";

const router = Router();

router.post('/scrape', controller);

export default router;