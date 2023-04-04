function solution(a, m, k) {
    
    let count = 0; 
    
    for(let i = 0; i <= a.length - m; i++) {
        let pairs = new Set();
        let hasPair = false; 
        
        for(let j = i; j < (i+m); j++) {
            let comp = k - a[j]; 
            console.info("comp >>> ", comp)
            
            if(pairs.has(comp)) {
                console.info("breaking >>> ")
                hasPair = true; 
                break; 
            }
            pairs.add(a[j]);    
            console.info("pairs >>> ", pairs)
        }
        if(hasPair) {
            count++;
            console.info("count >>> ", count)
        }
    }
    
    return count;

}
