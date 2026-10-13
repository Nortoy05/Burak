
// Task T
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0; 

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 
console.log(mergeSortedArrays([1, 5], [3, 2, 4])); 
// Task S 
// function missingNumber(nums: number[]): number {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = nums.reduce((sum, num) => sum + num, 0);

//   return expectedSum - actualSum;
// }

// // Tekshirish
// console.log(missingNumber([4, 0, 2, 1]));         
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); 


// Task R
// function calculate(str: string): number {
//   const numbers = str.split("+");     
//   let sum = 0;

//   for (const n of numbers) {
//     sum += Number(n.trim());                   
//   }
//   return sum;
// }

// console.log(calculate("1+3"));  

// Task Q

// function hasProperty(obj: object, property: string): boolean {
//   return property in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3", year: 2020 }, "year"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));

// Task P

// function objectToArray(obj: Record<string, number>): [string, number][] {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

// Task O

// function calculateSumOfNumbers(arr: any[]): number {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

/** Project Standards:
 *   - Logging standards
 *   - Naming standards:
 *      function, method, variable => CAMEL.    goHome
 *      class => PASCAL                         MemberService
 *      folder => KEBAB
 *      css => SNAKE                            button_style
 *   - Error Handling standards
 *
 * Triditional API
 * Rest API
 * GraphQL API
 *
 * Traditional FD => SSR (Adminka) => EJS
 * Modern FD => SPA (Users' application) => REACT
 */

/** Cookies:
 * request join
 * self detroy
 */

/**  Validations:
 * Frontend validation
 * Backend validation
 * Database validation
 */

// task N
// function palindromCheck(input: string): boolean {
//     const reverseInput = input.toLowerCase().split("").reverse().join("");
//     if (input.toLowerCase() === reverseInput) {
//         return true
//     }
//     return false
// }

// console.log(palindromCheck("dad"));

// Task M
// function getSquareNumbers(arr: number[]) {
//     return arr.map(function(number: number) {
//         return {
//             number: number,
//             square: number * number
//         };
//     });
// }

// console.log(getSquareNumbers([2, 4, 6]));
