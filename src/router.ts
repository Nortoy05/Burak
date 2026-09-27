import express from "express";
const router = express.Router();
import memberController from "./controllers/membercontroller";


router.get("/", memberController.goHome);

router.get("/Login", memberController.getLogin);

router.get("/signup", memberController.getSignup);

export default router;