// Guaranteed constraints:
// form a regular bracket sequence 
// 0 ≤ inputString.length ≤ 50.
// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

function solution(inputString) {

    while(inputString.includes("(")) {
        inputString = reverseAndRemoveParentheses(inputString)
    }

    return inputString
}

function reverseAndRemoveParentheses(inputString) {
    let inputStringArr = inputString.split("")
    let inputStringFrontArr = []
    let inputStringBackArr = []
    let stringInParentheses = []
    let stringReversed = []
    let stringRemovedParentheses = []
    const inputStringLength = inputString.length
    let indexOfOpen = 0
    let indexOfClose = 0

    // set the index for opening and closing parentheses
    for(let i = 0; i < inputStringArr.length; i++) {
        if(inputStringArr[i] === '(') {
            console.info("found >>> ", inputStringArr[i])
            indexOfOpen = i
        }
        if(inputStringArr[i] === ')') {
            console.info("found >>> ", inputStringArr[i])
            indexOfClose = i
            break;
        }
    }
    console.info(`indexOfOpen >>> ${indexOfOpen}, indexOfClose >>>> ${indexOfClose}`)

    // get the string inside the parentheses - parentheses included
    stringInParentheses = inputStringArr.splice(indexOfOpen, (indexOfClose - indexOfOpen + 1))
    console.info(stringInParentheses)
    
    // first half of the original array
    inputStringFrontArr = inputStringArr.splice(0, indexOfOpen)
    console.info(`inputStringFrontArr >>> ${inputStringFrontArr}`)
    
    // back half of the original array 
    inputStringBackArr = inputStringArr
    console.info(`inputStringBackArr >>> ${inputStringBackArr}`)

    // reverse the string
    stringReversed = stringInParentheses.reverse()
    console.info(stringReversed)
    
    // remove the parentheses
    stringRemovedParentheses = stringReversed.splice(1, (stringReversed.length -2))
    console.info(stringRemovedParentheses)
    console.info(inputStringArr)

    // join back the strings
    let result =  (inputStringFrontArr.join("") + stringRemovedParentheses.join("") + inputStringBackArr.join(""))
    return result
}

// console.log(reverseAndRemoveParentheses("foo(bar)"))
// console.log(reverseAndRemoveParentheses("foo(bar(baz))blim"))

console.info(solution("foo(bar)baz(blim)"))