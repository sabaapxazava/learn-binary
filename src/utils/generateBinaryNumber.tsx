export const generateBinaryNumber = async (
  length: number = 5
): Promise<string> => {
  let binaryString = "";

  for (let i = 0; i < length; i++) {
    const randomBit = Math.round(Math.random());
    binaryString += randomBit.toString();
  }

  return binaryString;
};
