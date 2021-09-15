import fs from "fs";
var board=fs.readFileSync("../data/boards.json",{encoding:"utf8"});
var boards=JSON.parse(board);
var id='mcu453ed'
export function boardInfo(id){
  return new Promise((resolve,reject)=>{
    var a=boards.forEach((curValue)=>{
     setTimeout(()=>{
       if((curValue.id)===id){
         resolve(curValue);
       }
    },2*1000);
    })
})
}
