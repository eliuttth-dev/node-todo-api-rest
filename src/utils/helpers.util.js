const fs = require("fs");

const doesExists = (path) => fs.existsSync(path);

const readJSONFile = (filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    
    return JSON.parse(fileContent);
} 

module.exports = {
    doesExists,
    readJSONFile
}