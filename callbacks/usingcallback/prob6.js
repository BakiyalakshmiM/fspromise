//Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.
//Get information from the Thanos boards
//Get all the lists for the Thanos board
//Get all cards for all lists simultaneously
import fs from "fs";
import {getBoardInfo} from "./prob1.js";
import {ListInfo} from "./prob2.js";
export function getInfo(binfo,bid,linfo,lid,cid){
    getBoardInfo(binfo,bid);
    ListInfo(linfo,lid);
    fs.readFile(cid,"utf-8",(err,data)=>{
        console.log(JSON.parse(data));
    })
}