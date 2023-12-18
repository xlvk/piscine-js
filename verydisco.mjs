import process from "node:process";

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

if (terminalArg.length === 1) {
  console.log(chunkifyAndRev(terminalArg[0]));
} else {
  console.log(chunkifyAll(terminalArg));
}
