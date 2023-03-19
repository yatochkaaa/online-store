const Router = require("express");
const brandController = require("../controllers/brandController");
const checkRole = require("../middleware/checkRoleMiddleware");

const brandRouter = new Router();

brandRouter.post("/", checkRole("ADMIN"), brandController.create);
brandRouter.get("/", brandController.getAll);

module.exports = brandRouter
