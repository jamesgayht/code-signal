function solution (s, t) {
    let count = 0; 
    
    // loop through both string; 
    for(let i = 0; i < s.length || i < t.length; i++) {
        
        if(!isNaN(parseInt(s[i]))) {
            let newS = s.slice(0, i) + s.slice(i+1);
            if(newS < t) {
                count ++;
            }
        }
        
        if(!isNaN(parseInt(t[i]))) {
            let newT = t.slice(0, i) + t.slice(i+1);
            if(s < newT) {
                count ++;
            }
        }
    }
    
    return count; 
}