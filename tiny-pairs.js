function solution(a, b, k) {
    
    let count = 0 

    for(let i = 0, j = a.length - 1; i < a.length, j >= 0; i++, j-- ) {
        
        let tinyPair = a[i].toString() + b[j].toString()
        
        if(k > parseInt(tinyPair)) count++
        
    }
    
    return count

}
