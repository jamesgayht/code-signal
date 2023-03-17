// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10

inputArray = ["aba", "aa", "ad", "vcd", "aba"]
// solution(inputArray) = ["aba", "vcd", "aba"]

function solution(inputArray) {

    let highest = 0

    for(let input of inputArray) {
        if(highest < input.length) {
            highest = input.length
        }
    }

    function checkLength(input) {
        return input.length === highest
    }

    const solution = inputArray.filter(checkLength)

    return solution
}

solution(inputArray);