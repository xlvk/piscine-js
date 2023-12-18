import fs from "fs";
import path from "path";
// Function to extract guest names from filenames
function extractGuestName(filename) {
  const [lastname, firstname] = filename.replace(/\.[^.]+$/, "").split("_");
  return {
    lastname,
    firstname,
  };
}

// Function to read directory and print guest names
function listGuests(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);

    // Extract and sort guest names
    const guests = files
      .map((file) => extractGuestName(file))
      .sort(
        (a, b) =>
          a.firstname.localeCompare(b.firstname)
      );

    // Print guest names
    guests.forEach((guest, index) => {
      console.log(`${index + 1}. ${guest.firstname} ${guest.lastname}`);
    });
  } catch (error) {
    console.error("Error reading directory:", error.message);
  }
}

// Check if directory path is provided as a command line argument
// if (process.argv.length !== 3) {
//   console.error("Usage: node tell-me-who.mjs <directory-path>");
//   process.exit(1);
// }

// Get directory path from command line argument
const directoryPath = process.argv[2] || '.';

// Call the function to list and print guest names
listGuests(directoryPath);
