// Using callbacks and the fs module's asynchronous functions, do the following:
// 1. Create a directory of random JSON files
//2. Delete those files simultaneously.
import fs from "fs";
function writeFile(filename, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, (err) => {
            err ? reject(err) : resolve();
        })
    })
}
function rm(filename) {
    return new Promise((resolve, reject) => {
        fs.rm(filename, (err) => {
            err ? reject(err) : resolve();
        })
    })
}
function mkdir(foldername) {
    return new Promise((resolve, reject) => {
        fs.mkdir(foldername, (err) => {
            (err) ? reject(err) : resolve();
        })
    })
}
var files = [];
export function todo() {
    mkdir("folder").then(() => { writeFile("./folder/a.json", ""); files.push("./folder/a.json") })
        .then(() => { writeFile("./folder/b.json", ""); files.push("./folder/b.json") })
        .then(() => { writeFile("./folder/c.json", ""); files.push("./folder/c.json") })
        .then(() => {
            var del = files.forEach((fi) => {
                rm(fi);
            })
        })
}
