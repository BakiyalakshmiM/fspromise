//Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json.
//  Then pass control back to the code that called it by using a callback function.
import fs from "fs";
export function getCardsInfo(filepath,id){
    fs.readFile(filepath,"utf-8",(err,data)=>{
        var list=JSON.parse(data);
        console.log(list[id])
    })
}

