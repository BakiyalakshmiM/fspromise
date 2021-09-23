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
export async function todo(){
    var readLipsum=await readFile("../../data/lipsum.txt");
    await(writeFile("uppercase.txt",readLipsum.toUpperCase()));
    await(writeFile("filenames.txt","uppercase.txt\n"));
    var readuc=await(readFile("uppercase.txt"));
    await(writeFile("lowercase.txt",readuc.toLowerCase().split("\n").join("")));
    await(appendFile("filenames.txt","lowercase.txt\n"));
    var readlc=await(readFile("lowercase.txt"));
    await(writeFile("sortedfile.txt",readlc.split("\n").sort().join("")));
    await(appendFile("filenames.txt","sortedfile.txt"))
    var filename=await(readFile("filenames.txt"));
    var files=filename.split("\n");
    await(files.forEach((file)=>{
        rm(file);
    }))
}










