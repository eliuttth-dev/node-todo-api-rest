require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3030

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("Hello World");
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));