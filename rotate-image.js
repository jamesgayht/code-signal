function solution(a) {
    if(a.length = 1) {
        return a
    }
    
    let y = a.length - 1
    for(let i = 0; i < a.length / 2; i++) {
        let x = (a.length - 1) - i 
        for(let j = i; j < y; j++) {
            
            let t = a[i][j]
            a[i][j] = a[j][y]
            a[j][y] = t
            
            t = a[i][j]
            a[i][j] = a[y][x]
            a[y][x] = t

            t = a[i][j]            
            a[i][j] = a[x][i]
            a[x][i] = t
            
            x--
        }
        y--
    }
     
    return a   
}

