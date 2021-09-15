import fs from "fs";
var board=fs.readFileSync("../data/boards.json",{encoding:"utf8"});
var list=fs.readFileSync("../data/lists.json",{encoding:"utf8"});
var card=fs.readFileSync("../data/cards.json",{encoding:"utf8"});
var boards=JSON.parse(board);
var lists=JSON.parse(list);
var cards=JSON.parse(card);
var id="mcu453ed";
var cardid="qwsa221";
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
export function listInfo(id){
    return new Promise((resolve,reject)=>{
      for(var key in lists){
       setTimeout(()=>{
         if((key)===id){
           resolve(lists[key]);
       }},2*1000);
       if((key)===id){
         break;
       }
      }
  })
  }
  export function cardInfo(cardid){
    return new Promise((resolve,reject)=>{
    for(var key in cards){
     setTimeout(()=>{
       if((key)===cardid){
         resolve(cards[key]);
     }},2*1000);
     if((key)===cardid){
         break;
     }
    }
})
}