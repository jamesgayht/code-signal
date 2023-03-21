// picture = ["abc", "ded"]
// solution(picture) = ["*****",
//                      "*abc*",
//                      "*ded*",
//                      "*****"]

function solution(picture) {

    let borderLength = picture[0].length + 2
    console.info(borderLength)
    
    let result = []
    let borderLine = ""
    let temp = []

    for(let i = 0; i < borderLength; i++) {
        borderLine += "*"
    }
    result.push(borderLine)
    console.info(result)

    for(let j = 0; j < picture.length; j++) {
        temp = picture[j].split("")
        temp.push("*")
        temp.splice(0,0, "*")
        console.info(temp)
        result.push(temp.join(""))
    }
    result.push(borderLine)
    console.info(result)
    return result
}

picture = ["abc", "ded"]
console.info(solution(picture))