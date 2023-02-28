import { AllData, Asteroid } from "../data/data";
// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// make sure that you destructure your parameters
type getAsteroidDataByName = {
  allData: AllData;
  asteroidName: string;
};

export function getAsteroidDataByName({
  allData,
  asteroidName,
}: getAsteroidDataByName): Asteroid | undefined {
  return allData.asteroids.find(({ name }) => name === asteroidName);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
