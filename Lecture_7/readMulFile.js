
const fs = require("fs");
console.log("Start");


async function readFile() {
    const dataFile1 = await fs.promises.readFile("f1.txt");
    const dataFile2 = await fs.promises.readFile("f2.txt");
    const dataFile3 = await fs.promises.readFile("f3.txt");

    console.log("Read "+dataFile1);
    console.log("Read "+dataFile2);
    console.log("Read "+dataFile3);
}
readFile();
console.log("End");