function solution(a) {
    
    const aMap = {}
    // let index = 0
    
    for(let i = 0; i < a.length; i++) {
        console.log("aMap >>> ", aMap)
        
        if(aMap[a[i]]) {
            aMap[a[i]] ++
            console.log("aMap[a[i]] >>> ", aMap[a[i]])
            
        }
        else if(!aMap[a[i]]) {
            aMap[a[i]] = 1 
            console.log("aMap[a[i]] in else if >>> ", aMap[a[i]])
        }
        
        if(aMap[a[i]] === 2) {
            console.log("about to return")
            console.log("aMap[a[i]] >>> ", aMap[a[i]])
            // index = i 
            return a[i]
        }
    }
    return -1
}