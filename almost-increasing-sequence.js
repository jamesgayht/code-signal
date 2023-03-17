/*
1. create a function indexOfFail to look for a decreasing sequence 
2. if none, return true
3. create 2 more arrays excluding the items in the decreasing sequence
4. return true if either of the new arrays has no decreasing sequence 
5. check the new arrays for another decreasing sequence (return false if there is another decreasing sequence )
*/

const sequence = [1,3,2,1];

function indexOfFail(sequence) {
    let index = null; 
    for(let i=0; i<sequence.length -1; i++) {
        if(sequence[i] >= sequence[i+1]) {
            index = i;
            break; 
        }
    }
    return index; 
}

function almostIncreasingSequence(sequence) {
    let index = indexOfFail(sequence)
    if(index === null) 
        return true;
    
    // use .slice because tempArr1 is pointing to sequence, if splice tempArr1 will affect sequence too 
    const tempArr1 = sequence.slice()
    console.info(tempArr1)
    tempArr1.splice(index, 1)
    console.info(tempArr1)
    if(indexOfFail(tempArr1) === null) {
        console.info("returning first true")
        return true;
    }

    // use .slice because tempArr1 is pointing to sequence, if splice tempArr1 will affect sequence too 
    const tempArr2 = sequence.slice()
    console.info(tempArr2)
    tempArr2.splice(index+1, 1)
    console.info(tempArr2)
    if(indexOfFail(tempArr2) === null) {
        console.info("returning second true")
        return true;
    }
    
    return false; 
}

console.info(almostIncreasingSequence(sequence))
