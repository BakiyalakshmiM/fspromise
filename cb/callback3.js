import fs from "fs";
var card=fs.readFileSync("../data/cards.json",{encoding:"utf8"});
var cards=JSON.parse(card);
var cardid="qwsa221";
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
