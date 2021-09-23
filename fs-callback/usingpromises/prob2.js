//Using callbacks and the fs module's asynchronous functions, do the following:
// 1. Read the given file lipsum.txt
// 2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
import fs from "fs";
function readFile(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,"utf-8",(err,data)=>{
            (err)?reject(err):resolve(data);
        })
    })
}
function writeFile(filename,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filename,content,(err)=>{
            (err)?reject(err):resolve();
        })
    })
}
function appendFile(filename,content){
    return new Promise((resolve,reject)=>{
        fs.appendFile(filename,content,(err)=>{
            (err)?reject(err):resolve();
        })
    })
}
function rm(filename){
    return new Promise((resolve,reject)=>{
        fs.rm(filename,(err)=>{
            (err)?reject(err):resolve();
        })
    })
}
export function todo(){
    readFile("../../data/lipsum.txt")
    .then((res)=>writeFile("uppercase.txt",res.toUpperCase()))
    .then(()=>writeFile("filenames.txt","uppercase.txt\n"))
    .then(()=>readFile("uppercase.txt"))
    .then((res)=>writeFile("lowercase.txt",res.toLowerCase().split("\n").join("")))
    .then(()=>appendFile("filenames.txt","lowercase.txt\n"))
    .then(()=>readFile("lowercase.txt"))
    .then((res)=>writeFile("sorted.txt",res.split("\n").sort().join("")))
    .then(()=>appendFile("filenames.txt","sorted.txt"))
    .then(()=>readFile("filenames.txt"))
    .then((res)=>{
        var files=res.split("\n");
        files.forEach((file)=>{
            rm(file);
        })
    })
}