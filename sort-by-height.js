// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
// -1 ≤ a[i] ≤ 1000.

function solution(a) {
    
    let treeMap = {}
    for(let i = 0; i < a.length; i++) {
        if(a[i] === -1) {
            treeMap[i] = a[i]
        }
    }
    console.info(treeMap)
    
    const toSort = a.filter(num => (num !== -1))
    toSort.sort((a, b) => a-b)
    console.info(toSort)

    for(let index in treeMap) {
        toSort.splice(Number(index), 0, treeMap[index])
    }
    console.info(toSort)
    return toSort

}

console.info(solution([-1, 150, 190, 170, -1, -1, 160, 180]))