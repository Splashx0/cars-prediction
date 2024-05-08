import { Router } from "express";
import { createQuizz,updateQuizz,getQuizzs, saveResponse, setEstimation } from "../controllers/quizz.controller.js";
const router = Router()

router.post('/create', createQuizz)
router.patch('/update', updateQuizz)
router.post('/getQuizzs', getQuizzs);
router.post('/saveResponse', saveResponse);
router.patch('/setEstimation', setEstimation);


export default router