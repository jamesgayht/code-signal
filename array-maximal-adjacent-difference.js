// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

function solution(inputArray) {
    let difference = 0

    for(let i = 0; i<inputArray.length-1; i++) {
        
        let currentDifference = inputArray[i]-inputArray[i+1]

        if(currentDifference < 0) 
            currentDifference *= -1
        
        
        if(currentDifference > difference) 
            difference = currentDifference
        
    }

    return difference
}


inputArray = [10, 11, 13]
console.info(solution(inputArray))
