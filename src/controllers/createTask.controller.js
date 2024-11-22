const { createTask } = require("../models/tasks.model");

function createTaskController(req, res){
    const { title, description, status } = req.body;

    try{
        const create = createTask(title, description, status);
        
        if(create){
            return res.status(200).json({message: "New task created"});
        } else {
            return res.status(400).json({message: "Couldn't create a repeated task"});
        }
    }catch(error){
        console.error("Something went wrong: || < CREATE TASK CONTROLLER > ||", error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = createTaskController