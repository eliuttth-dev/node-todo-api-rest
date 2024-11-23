const {deleteTask} = require("../models/tasks.model");

function deleteTaskController(req, res){

    const id = parseInt(req.params.id);

    try{
        const task = deleteTask(id);

        if(!task) return res.status(404).json({message: "Task not found"});

        return res.status(200).json({message: "Task deleted successfully"});
    }catch(error){
        console.error("Something went wrong || < DELETE TASK CONTROLLER > ||", error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = deleteTaskController;