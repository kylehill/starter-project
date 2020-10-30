export default <T>(array: Array<T>): Array<T> => {
  const result = [] as Array<T>;
  let input = [...array];

  while (input.length) {
    const idx = Math.floor(Math.random() * input.length);
    result.push(input[idx]);
    input = [...input.slice(0, idx), ...input.slice(idx + 1)];
  }

  return result;
};
