function solution(arr) {
    
    let current = "equal"; 
    let count = 0
    let consecutive = 0 
    
    for(let i = 0; i < arr.length - 1; i++) {
        
        // console.info("current >>>> ", current)
        // console.info("arr[i] >>>> ", arr[i])
        // console.info("arr[i+1] >>>> ", arr[i+1])
        
        
        if(arr[i] !== arr[i+1]) {
            if(arr[i] > arr[i+1] && current === "lower") {
                // console.info("in first if")
                consecutive++
                count += (1+consecutive)
                current = "higher"
                // console.info("count >>> ", count)
                // console.info("consecutive >>> ", consecutive)
            }
            else if(arr[i] < arr[i+1] && current === "higher") {
                // console.info("in second if")
                consecutive++
                count += (1+consecutive)
                current = "lower"
                // console.info("count >>> ", count)
                // console.info("consecutive >>> ", consecutive)
            }
            else if(arr[i] > arr[i+1]) {
                // console.info("in third if")
                count += 1
                consecutive = 0
                current = "higher"
                // console.info("count >>> ", count)
                // console.info("consecutive >>> ", consecutive)
            }
            else if(arr[i] < arr[i+1]) {
                // console.info("in fourth if")
                count += 1
                consecutive = 0
                current = "lower"
                // console.info("count >>> ", count)
                // console.info("consecutive >>> ", consecutive)
                
            }
        }
        else {
            current = "equal"; 
            consecutive = 0 
        }
    }
    
    return count
    
}
