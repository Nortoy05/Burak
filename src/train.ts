
// task N
function palindromCheck(input: string): boolean {
    const reverseInput = input.toLowerCase().split("").reverse().join("");
    if (input.toLowerCase() === reverseInput) {
        return true
    }
    return false
}

console.log(palindromCheck("dad"));

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

