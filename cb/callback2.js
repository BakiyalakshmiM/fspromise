import fs from "fs";
var list=fs.readFileSync("../data/lists.json",{encoding:"utf8"});
var lists=JSON.parse(list);
var listid='mcu453ed';
export function listInfo(id){
  return new Promise((resolve,reject)=>{
    for(var key in lists){
     setTimeout(()=>{
       if((key)===listid){
         resolve(lists[key]);
     }},2*1000);
     if((key)===listid){
       break;
     }
    }
})
}
