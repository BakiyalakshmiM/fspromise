//Using callbacks and the fs module's asynchronous functions, do the following:
// 1. Read the given file lipsum.txt
// 2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
import fs from "fs";
export function prob2(lipsumpath) {
    fs.readFile(lipsumpath, "utf-8", (err, data) => {
        fs.writeFile("uppercase.txt", data.toUpperCase(), (err) => {
            fs.appendFile("filename.txt", "uppercase.txt\n", (err) => {
                fs.readFile("uppercase.txt", "utf-8", (err, data) => {
                    fs.writeFile("lowercase.txt", (data.toLowerCase().split("\n").join("")), (err) => {
                        fs.appendFile("filename.txt", "lowercase.txt\n", (err) => {
                            fs.readFile("lowercase.txt", "utf-8", (err, data) => {
                                fs.writeFile("sortedfile.txt", data.split("\n").sort().join("."), (err) => {
                                    fs.appendFile("filename.txt", "sortedfile.txt\n", (err) => {
                                        fs.readFile("filename.txt", "utf-8", (err, data) => {
                                            var files = data.split("\n").filter((cont) => cont);
                                            files.forEach((fi) => {
                                                fs.rm(fi, (err) => {
                                                    if (err) console.log(err);
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    });
                })
            })
        })
    })
}