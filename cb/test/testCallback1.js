import { boardInfo } from "../callback1.js";
var id='mcu453ed'
const msg=(async()=>{
    try{
     const m=await boardInfo(id);
     console.log(m);
    }
    catch(err){
        console.log(err);
    }
})
msg();