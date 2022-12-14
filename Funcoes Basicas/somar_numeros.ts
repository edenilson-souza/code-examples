// define a function that takes an array of numbers and returns the sum of all the numbers
function sum(numbers: number[]): number {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

// test the sum() function
const numbers = [1, 2, 3, 4, 5];
const total = sum(numbers);
console.log(total); // output: 15





