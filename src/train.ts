// Task P

function objectToArray(obj: Record<string, number>): [string, number][] {
  return Object.entries(obj);
}

console.log(objectToArray({ a: 10, b: 20 }));     



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

