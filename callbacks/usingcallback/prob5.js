//Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.
//Get information from the Thanos boards
//Get all the lists for the Thanos board
//Get all cards for the Mind and Space lists simultaneously
import {getBoardInfo} from "./prob1.js";
import {ListInfo} from "./prob2.js";
import {getCardsInfo} from "./prob3.js";
export function getInfo(binfo,bid,linfo,lid,cinfo,cid,sid){
    getBoardInfo(binfo,bid)
    ListInfo(linfo,lid)
    getCardsInfo(cinfo,cid)
    getCardsInfo(cinfo,sid)
}