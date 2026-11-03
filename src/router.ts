import express from "express";
const router = express.Router();
import memberController from "./controllers/membercontroller";
import uploader from "./libs/utils/uploader";

/** Member Routes */
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
    "/member/logout", 
    memberController.verifyAuth, 
    memberController.logout
);
router.get(
    "/member/detail", 
    memberController.verifyAuth, 
    memberController.getMemberDetail
);

router.post(
    "/member/update", 
    memberController.verifyAuth, 
    uploader("members").single("memberImage"),
    memberController.updateMember
);

/** Product Routes */

/** Order Routes */

export default router;