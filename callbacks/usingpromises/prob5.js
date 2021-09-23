//Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.
//Get information from the Thanos boards
//Get all the lists for the Thanos board
//Get all cards for the Mind and Space lists simultaneously
import {readFile,boardId} from "./prob1.js";
import {readListFile,getData} from "./prob2.js";
import {readCardsFile,getId} from "./prob3.js";
export function getInfo(binfo,bid,linfo,lid,cinfo,cid,sid){
    readFile(binfo)
    .then((res)=>boardId(res,bid))
    .then((res)=>console.log(res))
    .then(()=>readListFile(linfo))
    .then((res)=>getData(res,lid))
    .then((res)=>{console.log(res)})
    .then(()=>readCardsFile(cinfo))
    .then((res)=>getId(res,cid))
    .then((res)=>console.log(res))
    .then(()=>readCardsFile(cinfo))
    .then((res)=>getId(res,sid))
    .then((res)=>console.log(res));
}
