import fs from "fs";
import {noOfMatchesPlayedPerYear,matchesWonPerTeamPerYear,extraRuns,economicBowler,delivery,match} from "./ipl.js";
const matchesperyear=noOfMatchesPlayedPerYear(match);
fs.writeFileSync("../public/output/matchesPerYear.json",JSON.stringify(matchesperyear),"utf-8");
console.log(matchesperyear);
const matcheswonperyear=matchesWonPerTeamPerYear(match);
fs.writeFileSync("../public/output/matchesWonPerTeamPerYear.json",JSON.stringify(matcheswonperyear),"utf-8");
console.log(matcheswonperyear);
const extraruns=extraRuns(match,delivery);
fs.writeFileSync("../public/output/ExtraRuns2016.json",JSON.stringify(extraruns),"utf-8");
console.log(extraruns);
const ecobowls=economicBowler(match,delivery)
fs.writeFileSync("../public/output/economicBowler.json",JSON.stringify(ecobowls),"utf-8");
console.log(ecobowls);
