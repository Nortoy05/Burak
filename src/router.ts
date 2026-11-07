import express from "express";
const router = express.Router();
import memberController from "./controllers/membercontroller";
import uploader from "./libs/utils/uploader";
import productController from "./controllers/productcontroller";
import orderController from "./controllers/ordercontroller";

/** Member Routes */
router.get("/member/restaurant", memberController.getRestaurant);
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

router.get("/member/top-users", memberController.getTopUsers);

/** Product Routes */
router.get("/product/all", productController.getProducts);
router.get(
    "/product/:id", 
    memberController.retrieveAuth, 
    productController.getProduct);

/** Order Routes */
router.post(
    "/order/create", 
    memberController.verifyAuth, 
    orderController.createOrder
);

export default router;