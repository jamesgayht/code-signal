function solution(a) {
    
    const numMap = {}
    
    for(let num of a) {
        if(num > 9) {
            num = num.toString()
            const numArr = num.split("")
            for(let i=0; i< numArr.length; i++) {
                if(numMap[numArr[i]]) {
                numMap[numArr[i]] ++ 
                }
                else if(!numMap[numArr[i]]) {
                    numMap[numArr[i]] = 1
                }
            }
            
        }
        else {
            if(numMap[num]) {
                numMap[num] ++ 
                }
                else if(!numMap[num]) {
                    numMap[num] = 1
                }
        }
    }
    
    let count = 0
    for(let key in numMap) {
        if(numMap[key] > count) {
            count = numMap[key]
        }
    }
    
    const result = Object.keys(numMap). filter(key => numMap[key] === count)
    
    for(let i = 0; i < result.length; i++) {
        result[i] = parseInt(result[i])
    }
    
    return result     
    
}
