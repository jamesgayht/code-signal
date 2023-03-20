// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

// Guaranteed constraints:
// 10 ≤ n < 106.

function solution(n) {

    // convert to string 
    let nString = n.toString()
    console.info(nString)

    let firstHalf = 0
    let secondHalf = 0

    for(let i = 0; (i < nString.length / 2); i++) {
        firstHalf += Number(nString[i])
    }

    for(let i = nString.length-1; (i >= nString.length / 2); i--) {
        secondHalf += Number(nString[i])
    }
    
    console.info(firstHalf)
    console.info(secondHalf)

    if(firstHalf === secondHalf) {
        return true
    }

    return false;
}

console.info(solution(1230))
console.info(solution(239017))
