const express = require("express");

const createTaskController = require("../controllers/createTask.controller");
const createTaskMiddleware = require("../middleware/createTask.middleware");
const readTaskController = require("../controllers/readTask.controller");
const router = express.Router();


router.post("/api/create-new-task", createTaskMiddleware, createTaskController);
router.get("/api/get-all-tasks", readTaskController)

module.exports = router;