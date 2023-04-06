function solution(a) {
    
    let b = []
    
    for(let i = 0, j = a.length - 1; i <= j; i++, j--) {
        if(i === j) b.push(a[i])
        else {
            b.push(a[i])
            b.push(a[j])
        }
    }
    
    for(let i = 0; i < b.length - 1; i++) {
        if(b[i] >= b[i+1]) {
            return false
        }
    }
    
    return true
}