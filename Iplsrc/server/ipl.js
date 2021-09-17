import fs from "fs";
import csvtojson from "csvtojson";
csvtojson().fromFile("../data/matches.csv").then((json)=>{fs.writeFileSync("matches.json",JSON.stringify(json),"utf-8")});
csvtojson().fromFile("../data/deliveries.csv").then((json)=>{fs.writeFileSync("deliveries.json",JSON.stringify(json),"utf-8")});
var matches=fs.readFileSync("matches.json");
var deliveries=fs.readFileSync("deliveries.json");
export var match=JSON.parse(matches);
export var delivery=JSON.parse(deliveries);
//1.Number of matches played per year for all the years in IPL.
export function noOfMatchesPlayedPerYear(match){
       var season=match.reduce((val,curVal)=>{
           val[curVal.season]=val[curVal.season]+1||1;
           return val;
       },{})
       return season;
}
noOfMatchesPlayedPerYear(match);
//2.Number of matches won per team per year in IPL.
export function matchesWonPerTeamPerYear(match){
       var wonPerYear=match.reduce((val,curVal)=>{
            if(!val[curVal.season]){
                val[curVal.season]={};
            }
            val[curVal.season][curVal.winner]=val[curVal.season][curVal.winner]+1||1;
            return val;
       },{})
       return wonPerYear;
}
matchesWonPerTeamPerYear(match)
//3.Extra runs conceded per team in the year 2016
export function extraRuns(match,delivery){
     var id=match.filter((val)=>{
         return val.season==="2016";
     })
     var firstId=id[0].id;
     var lastId=id[id.length-1].id;
     var extrarun=delivery.reduce((val,curValue)=>{
         if(parseInt(curValue.match_id)>=parseInt(firstId) && parseInt(curValue.match_id)<=parseInt(lastId)){
               val[curValue.bowling_team]=val[curValue.bowling_team]+parseInt(curValue.extra_runs)||parseInt(curValue.extra_runs);
         }
         return val;
     },{})
     return extrarun;
}
extraRuns(match,delivery);
//4.Top 10 economical bowlers in the year 2015
export function economicBowler(match,delivery){
      var id=match.filter((val)=>{
          return val.season==="2015";
      })
      var firstId=id[0].id;
      var lastId=id[id.length-1].id;
      var econbowl2016=delivery.reduce((val,curValue)=>{
        if(parseInt(curValue.match_id)>=parseInt(firstId) && parseInt(curValue.match_id)<=parseInt(lastId)){
            if(!val[curValue.bowler]){
                val[curValue.bowler]={};
            }
          val[curValue.bowler]["runs"]=val[curValue.bowler]["runs"]+parseInt(curValue.total_runs)||parseInt(curValue.total_runs);
          val[curValue.bowler]['bowling']=val[curValue.bowler]['bowling']+1||1;
        }
        return val;
        })
        var economicbowlers={};
        for(let key in econbowl2016){
             var value=Math.round(econbowl2016[key]["runs"]/(econbowl2016[key]["bowling"]/6));
             if(value>0){
                economicbowlers[key]=value;
             }
            }
            var allEconomicBowler=Object.entries(economicbowlers).sort((a,b)=>b[1]-a[1])
            var tenEconomicBowler=allEconomicBowler.slice(0,10);
          console.log(tenEconomicBowler);
}
economicBowler(match,delivery);























