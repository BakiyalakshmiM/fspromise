// Using callbacks and the fs module's asynchronous functions, do the following:
// 1. Create a directory of random JSON files
//2. Delete those files simultaneously.
import fs from "fs";
export function createdelete(foldername, filename) {
    fs.mkdir(foldername, (err) => {
        addingfile(filename);
    })
}
var addingfile = (filename) => {
    filename.forEach((fn) => {
        fs.writeFile(fn, "", (err) => {
            if (err) console.log(err);
        })
    })
    deletingfile(filename);
}
var deletingfile = (filename) => {
    filename.forEach((fn) => {
        fs.unlink(fn, (err) => {
            if (err) console.log(err);
        })
    })
}

