// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<T>(
  array: T[],
  callbackfn: (input: T) => undefined
): T | undefined {
  for (const item of array) {
    if (callbackfn(item)) {
      return item;
    }
  }
  return undefined;
}
