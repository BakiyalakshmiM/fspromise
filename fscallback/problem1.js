import fs from "fs";
export var create=new Promise((resolve,reject)=>{
    fs.writeFile("delete.json","",(err)=>{
        err?reject(err):resolve("Created");
    })
})
export var del=new Promise((resolve,reject)=>{
    fs.unlink("delete.json",(err)=>{
        err?reject(err):resolve("Deleted");
    })
})
// create.then((res)=>{console.log(res);
// return del}).then((res)=>console.log(res));
