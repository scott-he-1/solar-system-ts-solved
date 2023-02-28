import { Asteroid } from "../data/data";
// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy
type duplicateCounter = {
  [key: number]: number;
};

export function getGreatestDiscoveryYear(
  asteroids: Asteroid[]
): number | undefined {
  const counter: duplicateCounter = {};
  let mostOccurring: number | undefined = 0;
  let mostOccurringElement: number | undefined;
  
  asteroids.forEach(({ discoveryYear }) => {
    if (counter[discoveryYear]) {
      counter[discoveryYear] += 1;
    } else {
      counter[discoveryYear] = 1;
    }
    if (Number(counter[discoveryYear]) > Number(mostOccurring)) {
      mostOccurring = counter[discoveryYear];
      mostOccurringElement = discoveryYear;
    }
  });
  return mostOccurringElement;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
