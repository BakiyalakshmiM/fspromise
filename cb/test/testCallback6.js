import { boardInfo,listInfo,cardInfo } from "../callback6.js";
var id="mcu453ed";
var cardid="qwsa221";
async function msg(){
    var a=await boardInfo(id);
    console.log(a);
    var b=await listInfo(id);
    console.log(b);
    var c=await cardInfo();
    console.log(c);
}
msg();