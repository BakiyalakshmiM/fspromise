import { listInfo } from "../callback2.js";
var listid='mcu453ed';
const msg=(async()=>{
    const m=await listInfo(listid);
    console.log(m);
})
msg();
