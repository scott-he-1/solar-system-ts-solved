export const minBy = <T>(array: T[], cb: (input: T) => T): T | undefined => {
  let lowest;
  if (array[0]) {
    lowest = array[0];
  } else {
    return array[0];
  }
  for (const item of array) {
    if (cb(item) < cb(lowest)) {
      lowest = item;
    }
  }
  return lowest;
};

export function maxBy<T>(array: T[], cb: (input: T) => T): T | undefined {
  let highest;
  if (array[0]) {
    highest = array[0];
  } else {
    return array[0];
  }
  for (const item of array) {
    if (cb(item) > cb(highest)) {
      highest = item;
    }
  }
  return highest;
}
