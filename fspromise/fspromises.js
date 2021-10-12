import {promises } from "fs";
var random;
promises.mkdir("newfolder").then(() => {
    random = Math.floor(Math.random() * 5);
    promises.writeFile("./newfolder/" + random + ".json", "");
}).then(() => {
        promises.rm("./newfolder/" + random + ".json");
}).then(() => {
    random = Math.floor(Math.random() * 5);
    promises.writeFile("./newfolder/" + random + ".json", "");
}).then(() => {
        promises.rm("./newfolder/" + random + ".json");
}).then(() => {
    random = Math.floor(Math.random() * 5);
    promises.writeFile("./newfolder/" + random + ".json", "");
}).then(() => {
        promises.rm("./newfolder/" + random + ".json");
})

