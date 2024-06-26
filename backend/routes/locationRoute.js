import express from "express";
import { updateUserLocation, findUsersAround, getUserLocation } from "../controllers/locationController.js";
import { isAuthenticated } from "../middleware/auth.js";

const locationRouter = express.Router();


locationRouter.route("/user-location").put(isAuthenticated, updateUserLocation);
locationRouter.route("/my-location").get(getUserLocation);
locationRouter.route("/users-list").post(findUsersAround);
// locationRouter.route("/users-list").post(findUsersWithinDistanceRange);

export default locationRouter;