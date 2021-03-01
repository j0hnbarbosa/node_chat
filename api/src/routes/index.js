import UserController from "../controllers/UserController";
import LoginController from "../controllers/LoginController";
import { authenticateToken } from "../services/auth";

import { Router } from "express";
const routes = Router();

// ROUTES NOT AUTHENTICATED
routes.post("/", LoginController.findOne);
routes.post("/register", LoginController.create);


// AUTHENTICATED ROUTES
routes.get("/users", authenticateToken, UserController.findAll);
routes.post("/users", authenticateToken, UserController.create);
routes.delete("/users", authenticateToken, UserController.delete);
routes.put("/users", authenticateToken, UserController.update);


export default routes;