//Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json.
//  Then pass control back to the code that called it by using a callback function.
import fs from "fs";
export function readCardsFile(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,"utf-8",(err,data)=>{
            (err)?reject(err):resolve(JSON.parse(data));
        })
    })
}
export function getId(card,id){
    return new Promise((resolve,reject)=>{
        resolve(card[id]);
    })
}
export async function getCardInfo(filepath,id){
    var read=await readCardsFile(filepath);
    console.log(await getId(read,id));
}