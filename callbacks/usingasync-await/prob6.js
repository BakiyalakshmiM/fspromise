//Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.
//Get information from the Thanos boards
//Get all the lists for the Thanos board
//Get all cards for all lists simultaneously
import {readFile,boardId} from "./prob1.js";
import {readListFile,getData} from "./prob2.js";
import {readCardsFile} from "./prob3.js";
export async function getInfo(binfo,bid,linfo,lid,cinfo){
    var read=await readFile(binfo);
    console.log(await boardId(read,bid));
    var listRead=await readListFile(linfo);
    console.log(await getData(listRead,lid));
    console.log(await readCardsFile(cinfo));
}