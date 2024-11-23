const fs = require("fs");
const path = require("path");
const {doesExists, readJSONFile} = require("../utils/helpers.util");

function createTask(title, description, status) {
    const created_at = new Date().toISOString();
    const folderPath = path.join(__dirname, "../data");
    const filePath = path.join(folderPath, "data.json");

    // Check the folder exists
    if (!doesExists(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

    let tasks = [];
    let id = 1;

    // Check if the file exists
    if (doesExists(filePath)) {
        // Read and parse the file
        const fileContent = fs.readFileSync(filePath, "utf-8");
        tasks = JSON.parse(fileContent);

        // Find the highest ID and set the next ID
        const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
        id = maxId + 1;

        // Check if task is not duplicated
        const repeatedTask = tasks.some(task => task.title === title);
        if(repeatedTask){
            console.log("This task already exists")
            return false;
        }
    }

    const newTask = {
        id: id,
        title: title,
        description: description,
        status: status,
        created_at: created_at,
        updated_at: created_at,
    };

    tasks.push(newTask);

    // Write the updated tasks
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf-8");
    console.log(`Task created with ID: ${id}`);
    return true;
}

function updateTask(id, title, description, status){
    const updated_at = new Date().toISOString();
    const folderPath = path.join(__dirname, "../data");
    const filePath = path.join(folderPath, "data.json");

    if(!doesExists(folderPath)) throw new Error("Folder does not exists");
    if(!doesExists(filePath)) throw new Error("Data file does not exists");

    const task = readJSONFile(filePath);

    let taskFound = false;
    const updatedTask = task.map((item) => {
        if(item.id === id){
            taskFound = true;

            return {
                ...item,
                title: title || item.title,
                description: description || item.description,
                status: status || item.status,
                created_at: item.created_at,
                updated_at
            }
        }
        return item
    });

    if(!taskFound) throw new Error(`Task with ID: ${id} not found`);

    fs.writeFileSync(filePath, JSON.stringify(updatedTask, null, 2), 'utf8');
    console.log(`Task with ID ${id} has been updated successfully`);
    return true
}

module.exports = {
    createTask,
    updateTask
};
