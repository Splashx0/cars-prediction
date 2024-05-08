import { Router } from "express";
import { 
    getQuestions,
    getAdvancedQuestions,
    getBasicQuestions } from "../controllers/questions.controllers.js";

const router = Router();

router.get('/', getQuestions);
router.get('/advanced', getAdvancedQuestions);
router.get('/basic', getBasicQuestions);

export default router