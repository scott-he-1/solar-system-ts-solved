import { Planet } from "../data/data";
// SPACE DATA EXERCISE 11
// Return an array of Planets with less than 10 moons
// include planets with 0 moons
export function lowMoonsPlanets(planets: Planet[]): Planet[] {
  return planets.filter(
    ({ moonsCount }) => !moonsCount || (moonsCount ? moonsCount < 10 : false)
  );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
