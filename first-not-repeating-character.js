function solution(s) {
    const sArr = s.split("")
    
    const sMap = {}
    sArr.map((a) => {
        if(!sMap[a]) {
            sMap[a] = 1
        }
        else if(sMap[a]) {
            sMap[a]++
        }
    })
    console.info(sMap)
    for(let key in sMap) {
        if(sMap[key] === 1) {
            return key
        }
    }
    return "_"
}
