const toBinary = (number: number) => number.toString(2);
const toNumber = (number: string) => parseInt(number, 2);

const nextSparseNumber = (number: number) => {
  const numberInBinary = toBinary(number);
  if (!numberInBinary.includes("11")) return number;
  const binaryArray = numberInBinary.split("");

  let windowIndex = 0;
  let carryOverBit = 0;
  let zeroIndex = 0;
  let directionRight = true;
  while (directionRight || windowIndex >= 0) {
    const window1 = binaryArray[windowIndex];
    const window2 = binaryArray[windowIndex + 1];
    if (window1 === "1" && window2 === "1") {
      carryOverBit = 1;
      zeroIndex = windowIndex;
      binaryArray[windowIndex] = "0";
      binaryArray[windowIndex + 1] = "0";
      directionRight = false;
    }
    if (window1 === "0" && carryOverBit === 1) {
      carryOverBit = 0;
      binaryArray[windowIndex] = "1";
    }
    windowIndex += directionRight ? 1 : -1;
  }

  // Delete all bits on or after zeroIndex
  const bitsToDelete = binaryArray.length - zeroIndex;
  binaryArray.splice(binaryArray.length - bitsToDelete, bitsToDelete);

  // Append with zeros after
  const newStuff = binaryArray.concat(new Array(bitsToDelete).fill("0"));
  if (carryOverBit) newStuff.unshift("1");

  return toNumber(newStuff.join(""));
};

it("works", () => {
  expect(nextSparseNumber(toNumber("0"))).toBe(toNumber("0"));
  expect(nextSparseNumber(toNumber("1"))).toBe(toNumber("1"));
  expect(nextSparseNumber(toNumber("10"))).toBe(toNumber("10"));
  expect(nextSparseNumber(toNumber("11"))).toBe(toNumber("100"));

  expect(nextSparseNumber(toNumber("11111"))).toBe(toNumber("100000"));
  expect(nextSparseNumber(toNumber("11011"))).toBe(toNumber("100000"));
  expect(nextSparseNumber(toNumber("101011"))).toBe(toNumber("1000000"));
});