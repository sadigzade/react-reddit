export function merge<O extends object>(obj1: O) {
  return <K extends object>(obj2: K) => ({
    ...obj1,
    ...obj2,
  });
}
