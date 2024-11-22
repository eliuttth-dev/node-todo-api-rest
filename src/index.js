require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createTask } = require("./models/tasks.model");

const app = express();

const PORT = process.env.PORT || 3030

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("Hello World");
    createTask("new task", "testTask", "pendding")
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));