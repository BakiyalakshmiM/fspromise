import {create,del} from "../problem1.js";
  async function todo(){
    var a=await create;
    console.log(a);
    var b=await del;
    console.log(b);
  }
  todo();