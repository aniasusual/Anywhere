import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { acceptChumRequest, beholdUser, checkBeholdUser, fetchCount, removeBeholdUser, sendChumRequest } from "../controllers/requestController.js";

const requestRouter = express.Router();

requestRouter.route("/send-chum-request").put(isAuthenticated, sendChumRequest);
requestRouter.route("/accept-chum-request").put(isAuthenticated, acceptChumRequest);
requestRouter.route("/behold").put(isAuthenticated, beholdUser);
requestRouter.route("/remove-behold").put(isAuthenticated, removeBeholdUser);
requestRouter.route("/check-behold").put(isAuthenticated, checkBeholdUser);


requestRouter.route("/all-count").post(isAuthenticated, fetchCount);

export { requestRouter }