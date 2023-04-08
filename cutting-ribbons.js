function solution(a, k) {

    // set the maximum length a ribbon can be
    let left = 0
    let right  = Math.max(...a)
    console.info("right >>> ", right)

    while(left < right) {
        // using binary search, so get the mid length of the ribbon 
        const mid = Math.floor((left + right + 1) / 2) 
        console.info("mid >>> ", mid)
        
        // count the number of cuts each ribbon can make 
        let count = a.reduce((acc, curr) => (acc + Math.floor(curr/mid)), 0)
        console.info("count >>> ", count)

        if(count >= k) {
            left = mid
            console.info("left >>> ", left)

        }
        else {
            right = mid - 1 
        }
    }

    return left

}

const a = [1, 2, 3, 4, 9];

k = 2;

console.info(solution(a, k));
