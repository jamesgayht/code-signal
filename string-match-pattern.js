function solution(pattern, source) {
    
    if(pattern.length > source.length) return 0
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    
    let count = 0;
    let sourceNums = [] 
    
    for(let char of source) {
        if(vowels.includes(char)) {
            sourceNums.push("0")
        }
        else {
            sourceNums.push("1")
        }
    }
    // console.log("sourceNums >>> ", sourceNums)
    
    let patternStr = sourceNums.join("")
    // console.log("patternStr >>> ", patternStr)
    
    
    while(patternStr.length >= pattern.length) {
        let temp = patternStr.slice(0, pattern.length)
        if(temp === pattern) count++
        patternStr = patternStr.slice(1)    
        // console.log("new patternStr >>> ", patternStr)
        
    }
    
    return count
    
}
