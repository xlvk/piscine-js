// tell-me-how-many.mjs

import fs from "fs/promises";
import path from "path";

async function countFilesInDirectory(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    return files.length;
  } catch (error) {
    console.error("Error reading directory:", error.message);
    return -1; // Return -1 to indicate an error
  }
}

async function main() {
  // Get the directory path from the command line arguments or use the current directory
  const directoryPath = process.argv[2] || ".";

  const absolutePath = path.resolve(directoryPath);

  // Count the number of entries in the specified directory
  const numberOfEntries = await countFilesInDirectory(absolutePath);
  console.log(numberOfEntries);
}

// Run the main function
main();
