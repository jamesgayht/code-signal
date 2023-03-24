// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

function solution(inputArray) {
    const sorted = inputArray.sort()
    console.info(sorted)

    let jump = 2
    let breakJump = true;

    while(breakJump) {

        let checker = jump

        for(let num of sorted) {
            if(num % jump === 0) {
                console.info("breaking")
                jump++;
                break;
            }
        }
        console.info("in while loop")
        
        console.info(`checker >>> ${checker}, jump >>> ${jump}`)
        if(checker === jump) {
            breakJump = false;
            return jump
        }
    }


}

inputArray = [5, 3, 6, 7, 9]
console.info(solution(inputArray))
