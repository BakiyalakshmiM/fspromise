//Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json
// then pass control back to the code that called it by using a callback function.
import fs from "fs";
export function readFile(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,"utf-8",(err,data)=>{
            (err)?reject(err):resolve(JSON.parse(data));
        })
    })
}
export function boardId(board,Id){
    return new Promise((resolve,reject)=>{
        board.find((b)=>{
            b.id===Id?resolve(b):reject(err);
        })
    })
}
export async function getBoardInfo(filepath,id){
    var read=await readFile(filepath);
    var info=await boardId(read,id);
    console.log(info);
}
