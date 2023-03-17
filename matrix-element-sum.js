// constraints
// 1 ≤ matrix.length ≤ 5,
// 1 ≤ matrix[i].length ≤ 5,
// 0 ≤ matrix[i][j] ≤ 10.

// matrix = [
//   [1, 1, 1, 0],
//   [0, 5, 0, 1],
//   [2, 1, 3, 10],
// ];

matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

/*
1. iterate through to first array in matrix to check for 0
2. if no 0s, add all elements to total 
3. if found 0s, reassign all elements below to 0 using index + length (since its a matrix, the element below will always be  + length)
4. repeat steps 1-3 until all elements have been iterated through 
*/

function solution(matrix) {

    let total = 0; 
    for(let i = 0; i < matrix.length; i++) {
        for(let j=0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0 && i < matrix.length-1) {
                matrix[i+1][j] = 0;
            }
            if(matrix[i][j] !== 0) {
                total += matrix[i][j]
            }
        }
    }
    return total; 

}

console.info(solution(matrix))
