const path = require("path");
const {doesExists, readJSONFile} = require("../utils/helpers.util");

function readTaskController(req,res){
    const folderPath = path.join(__dirname, "../data");
    const filePath = path.join(folderPath, "data.json");

    try {
        if(!doesExists(folderPath)){
            console.error("Folder does not exists:", folderPath);
            return res.status(404).json({message: "Data or folder not foud!"});
        }

        if(!doesExists(filePath)){
            console.error("Data file does not exists:", filePath);
            return res.status(404).json({message: "Data file not foud!"});
        }

        const task = readJSONFile(filePath)
        const data = task.map((task)=> (
            {
                id: task.id,
                title: task.title,
                description: task.description,
                status: task.status,
                created_at: task.created_at,
                updated_at: task.updated_at
            }
        ));

        return res.status(200).json({content: data})
    } catch (error) {
        console.error("Something went wrong: || < READ TASK CONTROLLER > ||", error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = readTaskController;