import fs, { appendFileSync } from "fs";
//1. Read the given file lipsum.txt
export var read=new Promise((resolve,reject)=>{
       fs.readFile("../data/lipsum.txt","utf-8",(err,data)=>{
           err?reject(err):resolve(data);
       })
})
var ucasefile;
//2. Convert the content to uppercase & write to a new file.
//  Store the name of the new file in filenames.txt
export var upperCase=new Promise((resolve,reject)=>{
    var file=fs.readFileSync("../data/lipsum.txt","utf-8");
    ucasefile=file.toUpperCase();
    fs.writeFile("Uppercase.txt",ucasefile,(err)=>{
        err?reject(err):resolve("Converted to UpperCase");
    })
    fs.writeFileSync("filenames.txt","Uppercase.txt");
})
// 3.Read the new file and convert it to lower case. Then split the contents into sentences.
// Then write it to a new file. Store the name of the new file in filenames.txt
var lcasefile;
export var lowerCase=new Promise((resolve,reject)=>{
        //file=fs.readFileSync("./Uppercase.txt","utf-8");
        lcasefile=ucasefile.toLowerCase().split(".").join(".");
        fs.writeFile("./SplittedLowerCase.txt",lcasefile,(err)=>{
            err?reject(err):resolve("Converted to lowercase and splitted");
        })
        fs.appendFileSync("filenames.txt","SplittedLowerCase.txt");
     })
// 4. Read the new files, sort the content, write it out to a new file.
//   Store the name of the new file in filenames.txt
export var sort=new Promise((resolve,reject)=>{
       var sortfile=lcasefile.split(".").sort().join(".");
       fs.writeFile("sorted.txt",sortfile,(err)=>{
          err?reject(err):resolve("Sorted");
       })
       fs.appendFileSync("filenames.txt","sorted.txt");
})
// 5. Read the contents of filenames.txt.
// delete all the new files that are mentioned in that list simultaneously.
export var readfiles=new Promise((resolve,reject)=>{
        fs.readFile("./filenames.txt","utf-8",(err,data)=>{
            (err)?reject(err):resolve(data);
        })
})
export var del=new Promise((resolve,reject)=>{
var files=["./filenames.txt","./Uppercase.txt","./SplittedLowerCase.txt","sorted.txt"];
        var erase=files.forEach((names)=>{
          fs.unlink(names,(err)=>{
            (err)?reject(err):resolve("Deleted all files");
          })
        });
    })

