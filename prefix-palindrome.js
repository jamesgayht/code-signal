function solution(s) {
    // create a function to check for palindrome strings 
    
    // get the longest prefix that is a palindrome  
    let palindromeLength = 0
    let temp = ""
    let sArr = s.split("")

    for(let i=0; i < s.length; i++) {
        temp += s[i]

        
        if(isPalindrome(temp)) {
            palindromeLength = i+1
        }
        
        if(i === s.length - 1 && palindromeLength !== 1) {
            sArr.splice(0, palindromeLength)
            s = sArr.join("")
            sArr = s.split("")
            temp = ""
            i = -1
        }
        
        if(i === s.length - 1 && palindromeLength === 1) {
            return s
        }
        
        if( s.length < 1) {
            return s
        }
    }
    return s
}

function isPalindrome(inputString) {
    if (inputString.length === 1) {
        return true
    }
    
    if (inputString.length < 1) {
        return false
    }
    
    let j=inputString.length -1
    if(inputString.length % 2 === 0) {
        for(let i = 0; i < inputString.length/2; i++) {
            if(inputString[i] !== inputString[j]) {
                return false   
            } 
            j--
        }
        return true
    }
    
    j=inputString.length -1
    if(inputString.length % 2 !== 0) {
        for(let i = 0; i < Math.floor(inputString.length/2); i++) {
            if(inputString[i] !== inputString[j]) {
                return false
            }
            j--
        }
        return true
    }
    
    return 0; 
    
}