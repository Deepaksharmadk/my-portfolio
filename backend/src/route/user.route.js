import express from "express";
const router = express.Router();
import userValidation from "../middleware/userValidation.js";
import userRegister from "../controllers/user.controller.js";
router.route("/Register").post(userValidation, userRegister);

export default router;
