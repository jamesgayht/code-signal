function solution(prices, notes, x) {
    
    let overpayment = 0
    
    for(let i = 0; i < notes.length; i++) { 
        let note = notes[i].split(" ")

        if(note[0] !== "Same" && note[1] === "higher") {
            overpayment += prices[i] - (prices[i] / (100+parseFloat(note[0]))) * 100
            
        }
        else if(note[0] !== "Same" && note[1] === "lower") {
            overpayment += prices[i] - (prices[i] / (100-parseFloat(note[0]))) * 100
        }
    }
    
    return overpayment <= x
    
}