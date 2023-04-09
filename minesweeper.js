// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
//                     [2, 1, 1],
//                     [1, 1, 1]]

function solution(matrix) {

    const numRows = matrix.length; 
    const numCols = matrix[0].length; 
    const result = []; 

    for(let i = 0; i < numRows; i++) {
        const rows = [];
        
        for(let j = 0; j < numCols; j++) {
             let count = 0; 

             for(let di = -1; di <= 1; di++) {
                for(let dj = -1; dj <= 1; dj++) {
                    if(di === 0 && dj === 0) continue;
                    const ni = i + di
                    const nj = j + dj
                    if(ni < 0 || ni >= numRows || nj < 0 || nj >= numRows) continue;
                    if(matrix[ni][nj]) count++
                }
            }
            rows.push(count);
        }
        result.push(rows);
    }
    return result; 

}

matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
]

console.log(solution(matrix));
