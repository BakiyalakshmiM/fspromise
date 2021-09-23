//Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json.
//  Then pass control back to the code that called it by using a callback function.
import fs from "fs";
export function ListInfo(filepath,Id){
    fs.readFile(filepath,"utf-8",(err,data)=>{
        var list=JSON.parse(data);
        console.log(list[Id]);
    })
}
