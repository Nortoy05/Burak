// Task M
function getSquareNumbers(arr: number[]) {
    return arr.map(function(number: number) {
        return {
            number: number,
            square: number * number
        };
    });
}

console.log(getSquareNumbers([2, 4, 6]));

