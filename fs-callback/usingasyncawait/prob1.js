// Using callbacks and the fs module's asynchronous functions, do the following:
// 1. Create a directory of random JSON files
//2. Delete those files simultaneously.
import fs from "fs";
function mkdir(foldername){
    return new Promise((resolve,reject)=>{
        fs.mkdir(foldername,(err)=>{
            (err)?reject(err):resolve();
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
function rm(filename){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{fs.rm(filename,(err)=>{
            (err)?reject(err):resolve();
        })
    },5000)
    })
}
var files=[];
export async function todo(){
    await mkdir('folder');
    await writeFile("./folder/a.json","");
    files.push("./folder/a.json");
    await writeFile("./folder/b.json","");
    files.push("./folder/b.json");
    await writeFile("./folder/c.json","");
    files.push("./folder/c.json");
    await files.forEach((file)=>{rm(file)});
}