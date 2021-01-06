import UserConttroler from "../controllers/UserController";

import { Router } from "express";
const routes = Router();


routes.get("/", UserConttroler.findAll);
routes.post("/", UserConttroler.create);
routes.delete("/", UserConttroler.delete);
routes.put("/", UserConttroler.update);

export default routes;