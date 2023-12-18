import { readFile } from "node:fs";
import process from "node:process";

function readFromFile(filePath, callback) {
  // Use the readFile function from the fs module
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading from file:", err);
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

const chunkifyAndRev = (str = "") => {
  let div = Math.floor(str.length / 2);
  let partA = str.slice(0, div);
  let partB = str.slice(div, str.length);
  return partB + partA;
};

const chunkifyAll = (arr = []) => {
  return arr.map((word) => chunkifyAndRev(word)).join(" ");
};

const filePath = process.argv[2];

readFromFile(filePath, (err, data) => {
  if (!err) {
    let d = data.split(" ");
    if (d.length === 1) {
      console.log(chunkifyAndRev(d[0]));
    } else {
      console.log(chunkifyAll(d));
    }
  }
});
