import shuffle from "util/shuffle";

test("shuffle returns an array of the same length", () => {
  const array = [1, 2, 3, 4, 5];
  const shuffled = shuffle(array);
  expect(shuffled).toHaveLength(5);
});

test("shuffle returns a shuffled array", () => {
  const array = [1, 2, 3, 4, 5];

  jest.spyOn(global.Math, "random").mockReturnValue(0.999);
  const shuffled = shuffle(array);
  jest.spyOn(global.Math, "random").mockRestore();

  expect(shuffled).toEqual([5, 4, 3, 2, 1]);
});
