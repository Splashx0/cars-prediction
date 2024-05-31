import { Router } from "express";
import { getMarques, getAllModeles,getModelesByMarque } from "../controllers/cars.controllers.js";

const router = Router();

router.get('/marques', getMarques)
router.get('/modeles', getAllModeles)
router.get('/:marqueChoosed', getModelesByMarque)


export default router