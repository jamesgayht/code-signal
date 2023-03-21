// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105,
// 45 ≤ a[i] ≤ 100.

function solution(a) {

    let result = []
    let evenTotalWeight = 0
    let oddTotalWeight = 0

    for(let i = 0; i < a.length; i ++) {
        if(i % 2 === 0) {
            evenTotalWeight += a[i]
        }
        if(i % 2 !== 0) {
            oddTotalWeight += a[i]
        }
    }
    result.push(evenTotalWeight)
    result.push(oddTotalWeight)

    return result;
}

const a = [50, 60, 60, 45, 70]

console.info(solution(a))
