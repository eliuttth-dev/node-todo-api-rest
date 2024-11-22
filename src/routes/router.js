const express = require("express");

const createTaskController = require("../controllers/createTask.controller");

const router = express.Router();

router.post("/api/createNewTask", createTaskController);

module.exports = router;