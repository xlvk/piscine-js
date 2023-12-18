import process from "node:process";
import fs from "node:fs"

// verydisco-forever.txt

const chunkifyAndRev = (str = "") => {
  let div = Math.ceil(str.length / 2);
  let partA = str.slice(0, div);
  let partB = str.slice(div, str.length);
  return partB + partA;
};

const chunkifyAll = (arr = []) => {
  return arr.map((word) => chunkifyAndRev(word)).join(" ");
};

let terminalArg = process.argv[2].split(" ");

function writeToFile(textToWrite) {
  fs.writeFile("verydisco-forever.txt", textToWrite, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    }
  });
}

if (terminalArg.length === 1) {
  writeToFile(chunkifyAndRev(terminalArg[0]));
} else {
  writeToFile(chunkifyAll(terminalArg));
}
