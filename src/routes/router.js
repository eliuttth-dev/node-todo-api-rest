const express = require("express");

const createTaskController = require("../controllers/createTask.controller");
const createTaskMiddleware = require("../middleware/createTask.middleware");

const router = express.Router();


router.post("/api/createNewTask", createTaskMiddleware, createTaskController);

module.exports = router;