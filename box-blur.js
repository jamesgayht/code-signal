function calculateSquare(square) {
    // calculates each 3*3 blur image 
    let totalSum = 0
    for(let i = 0; i < 3; i++) {
        for(let j=0; j<3; j++) {
            totalSum += square[i][j]
        }
    }

    // return the average of the sum of pixels
    return Math.floor(totalSum/9)
}

function solution(image) {
    // calculate the blurred image for n*n image
    
    // stores the 3*3 matrix
    let square = []

    // stores one row of the 3*3 matrix and will be pushed to the square
    let squareRow = []

    // stores the resulting blurred pixel in one row and will be pushed to blurredSquare
    let blurredRow = []

    // stores the resulting blurred image 
    let blurredSquare = []

    // number of rows and columns in the given n*n image
    let nRows = image.length
    let nCol = image[0].length

    let rowPointer = 0
    let colPointer = 0

    while(rowPointer <= nRows - 3) {
        while(colPointer <= nCol -3) {
            for(let i=rowPointer; i<(rowPointer + 3); i++) {
                for(let j=colPointer; j<(colPointer+3); j++) {
                    // push all the pixels in a row of 3*3 matrix
                    squareRow.push(image[i][j])
                }
                // push the row in the square and reset the row
                square.push(squareRow)
                squareRow = []
            }
            // calculate the blurred pixel for the 3*3 matrix and reset the square
            blurredRow.push(calculateSquare(square))
            square = []

            // increase the colPointer
            colPointer++
        }
        // push the blurredRow to blurredSquare & reset the blurred row
        blurredSquare.push(blurredRow)
        blurredRow = []

        // increase the rowPointer & reset the colPointer
        rowPointer++
        colPointer = 0
    }

    // return the blurredSquare
    return blurredSquare

}

// image = [[1, 1, 1], 
//          [1, 7, 1], 
//          [1, 1, 1]]
// return 1

image = [[7, 4, 0, 1], 
         [5, 6, 2, 2], 
         [6, 10, 7, 8], 
         [1, 4, 2, 0]]

console.info(solution(image))