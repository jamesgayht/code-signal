// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3.

function solution(inputArray) {

    let base = inputArray[0]
    let counter = 0
    
    for(let i=0; i<inputArray.length-1; i++) {
        while(inputArray[i+1] <= inputArray[i]) {
            console.info("inputArray[i] >>> ", inputArray[i])
            console.info("inputArray[i+1] >>> ", inputArray[i+1])
            inputArray[i+1]++
            counter++
        }

    }
    return counter
}

inputArray = [1, 1, 1]
console.info(solution(inputArray))