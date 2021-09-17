import {read,upperCase,lowerCase,sort,readfiles,del} from "../problem2.js";
async function todo(){
    var readFiles=await read;
    console.log(readFiles);
    var ucase=await upperCase;
    console.log(ucase);
    var lcase=await lowerCase;
    console.log(lcase);
    var sorted=await sort;
    console.log(sorted)
    var readallfile=await readfiles;
    console.log(readallfile);
    var dele=await del;
    console.log(dele);
}
todo();