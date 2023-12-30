export const xorBinaryDigits = async (
  binary1: string,
  binary2: string
): Promise<string> => {
  const maxLength = Math.max(binary1.length, binary2.length);

  let result = "";

  for (let i = 0; i < maxLength; i++) {
    result += binary1[i] === binary2[i] ? "0" : "1";
  }
  return result;
};
