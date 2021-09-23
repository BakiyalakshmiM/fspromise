//Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json.
//  Then pass control back to the code that called it by using a callback function.
import fs from "fs";
export function readListFile(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,"utf-8",(err,data)=>{
            (err)?reject(err):resolve(JSON.parse(data));
        })
    })
}
export function getData(list,id){
    return new Promise((resolve,reject)=>{
        resolve(list[id]);
    })
}
export function ListInfo(filepath,id){
    readListFile(filepath)
    .then((res)=>getData(res,id))
    .then((res)=>{console.log(res)})
}