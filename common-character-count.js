// Guaranteed constraints:
// 1 ≤ s1.length < 15.
// 1 ≤ s2.length < 15.



function solution(s1, s2) {
    let result = 0
    let s2Arr = s2.split("")

    for(let i = 0; i < s1.length; i++) {
        console.info(s1[i])
        console.info(s2Arr)
        if(s2Arr.includes(s1[i])) {
           result++; 
           let index = s2Arr.indexOf(s1[i])
           console.info(index)
           s2Arr.splice(index, 1)
           console.info(s2Arr)
        }
    }
    return result
}

s1 = "aabcc";
s2 = "adcaa";

console.info(solution(s1, s2))
