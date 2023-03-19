const Router = require("express");
const deviceController = require("../controllers/deviceController");
const checkRole = require("../middleware/checkRoleMiddleware");

const deviceRouter = new Router();

deviceRouter.post("/", checkRole("ADMIN"), deviceController.create);
deviceRouter.get("/", deviceController.getAll);
deviceRouter.get("/:id", deviceController.getOne);

module.exports = deviceRouter;
