const { updateTask } = require("../models/tasks.model");

function updateTaskController(req, res){
    const {title, description, status} = req.body;
    const id = parseInt(req.params.id)
    
    try{
        const task = updateTask(id, title, description, status);

        if(!task) return res.status(400).json({message:"This task does not exists"});
    
        return res.status(200).json({message:"Task updated successfully"});
    }catch(error){
        console.error("Something went wrong || < UPDATE TASK CONTROLLER > ||", error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = updateTaskController;