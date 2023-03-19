const Router = require("express");
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

const typeRouter = new Router();

typeRouter.post("/", checkRole("ADMIN"), typeController.create);
typeRouter.get("/", typeController.getAll);

module.exports = typeRouter;
