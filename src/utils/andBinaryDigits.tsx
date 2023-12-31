export const andBinaryDigits = async (
  binary1: string,
  binary2: string
): Promise<string> => {
  const maxLength = Math.max(binary1.length, binary2.length);

  let result = "";

  for (let i = 0; i < maxLength; i++) {
    result += binary1[i] === "1" && binary2[i] === "1" ? "1" : "0";
  }
  return result;
};
