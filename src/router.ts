import express from "express";
const router = express.Router();
import memberController from "./controllers/membercontroller";

/** Member Routes */
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.get("/member/detail", memberController.verifyAuth);

/** Product Routes */

/** Order Routes */

export default router;