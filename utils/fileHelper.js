const fs = require('fs');
const path = require('path');
const dataPath = path.join(process.cwd(), 'data');

function getAllFileNames() {
    let files = fs.readdirSync(dataPath);
    return files; 
}

function getNewId(json) {
    let newId = 0;
    if(json.length > 0) {
        for (const element of json) {
            if(element.id > newId) {
                newId = element.id;
            }
        }
    }

    return newId + 1;
}

function createDataFile(title, date, content, newId) {
    const filename = createFileName(newId);
    const newContentObj = createValidObj(newId, title, date, formatDate(date), content, filename)
    try {
        writeToFile(filename, newContentObj);
        return newContentObj;
    } catch (error) {
        console.log(error.message);
        return {};
    }
}

function deleteFile(filename) {
    try {
        fs.unlinkSync(path.join(dataPath,filename));
    } catch (error) {
        console.log(error.message);
    }
}

function writeToFile(filename, fileContent) {
    fs.writeFile(path.join(dataPath, filename), JSON.stringify(fileContent), err => {
        if(err) {
            console.log(err.message);
        }
    } )
}

function createValidObj(id, title, date, formatteddate, content, filename) {
    return {
        id: id,
        title: title,
        date: date,
        formatteddate: formatteddate,
        content: content,
        filename: filename
    }
}

function updateFile(jsonObj, title, date, content) {
    try {
        const obj = createValidObj(jsonObj.id, title, date, formatDate(date), content, jsonObj.filename);
        writeToFile(jsonObj.filename, obj)
    } catch (error) {
        console.log(error.message);
    }
}

function createFileName(id) {
    return `${id}.json`
}

function createJSONFromFiles(fileList) {
    let JSONArr = [];
    for (const file of fileList) {
        const currFileObj = getFileData(file);
        JSONArr.push(currFileObj);
    }
    return JSONArr;
}

function getFileData(filename) {
    let data;
    try {
        data = fs.readFileSync(path.join(dataPath,filename), { encoding: "utf-8" });
    } catch (error) {
        console.log("ERROR occured when Reading filename: ", filename, error);
    }
    return JSON.parse(data);
}

function formatDate(edate) {
    const arrMonths = ["January","February","March","April","May","June","July","August","September","October", "November","December"];
    //epoch --> normal Date
    //1730160000 --> June 21, 2024
    let date = new Date(edate);
    const transformedDate = arrMonths[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    return transformedDate;
}

module.exports = {getAllFileNames, createJSONFromFiles, getFileData, getNewId, createDataFile, deleteFile, updateFile};