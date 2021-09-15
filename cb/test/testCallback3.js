import { cardInfo } from "../callback3.js";
var cardid="qwsa221";
const msg=(async()=>{
    const m=await cardInfo(cardid);
    console.log(m);
})
msg();