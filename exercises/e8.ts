import { Planet } from "../data/data";
// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters
type findPlanetByMoon = {
  planets: Planet[];
  moonName: string;
};

export function findPlanetByMoon({
  planets,
  moonName,
}: findPlanetByMoon): Planet | undefined {
  return planets.find(
    ({ moons }) => moons && moons.join(" ").match(new RegExp(moonName, "gi"))
  );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
