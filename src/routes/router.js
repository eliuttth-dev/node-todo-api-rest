const express = require("express");

const createTaskController = require("../controllers/createTask.controller");
const createTaskMiddleware = require("../middleware/createTask.middleware");
const readTaskController = require("../controllers/readTask.controller");
const updateTaskController = require("../controllers/updateTask.controller");
const deleteTaskController = require("../controllers/deleteTask.controller");
const router = express.Router();


router.get("/api/get-all-tasks", readTaskController)
router.post("/api/create-new-task", createTaskMiddleware, createTaskController);
router.put("/api/update-task/:id", updateTaskController);
router.delete("/api/delete-task/:id", deleteTaskController);


module.exports = router;
