// Prompt the user to enter froyo flavors
const input = prompt("Enter a list of comma-separated froyo flavors (e.g., vanilla,vanilla,strawberry):");

// Split input into an array and normalize to lowercase
const flavors = input.split(",").map(flavor => flavor.trim().toLowerCase());

// Create an object to store flavor counts
const flavorCounts = {};

// Count each flavor
for (const flavor of flavors) {
  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
}

// Log the results to the console
console.log("Froyo Order Summary:");
for (const flavor in flavorCounts) {
  console.log(`${flavor}: ${flavorCounts[flavor]}`);
}
