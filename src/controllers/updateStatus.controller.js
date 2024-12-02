const { markAsCompleted } = require("../models/tasks.model");

function updateStatusController(req,res){
  const { status } = req.body;
  const id = parseInt(req.params.id);

  try{
    const task = markAsCompleted(id, status);
    if(!task) return res.status(400).json({message: "This task does not exists"}); 
    return res.status(200).json({message: "Task Status updated"});
  }catch(error){
    console.error("Something went wrong || < UPDATE STATUS CONTROLLER > ||", error.message);
    return res.status(500).json({message: "Internal Server Error"});
  }
}

module.exports = updateStatusController;
