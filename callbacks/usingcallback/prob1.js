//Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json
// then pass control back to the code that called it by using a callback function.
import fs from "fs";
export function getBoardInfo(filename,Id){
    fs.readFile(filename,"utf-8",(err,data)=>{
        var board=JSON.parse(data);
        var boardData=board.find((b)=>{
            return b.id===Id;
        })
        console.log(boardData);
    })
}
