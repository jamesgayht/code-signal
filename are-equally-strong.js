// For yourLeft = 10; yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;

// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;

// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (
    (yourLeft === friendsLeft && yourRight === friendsRight) ||
    (yourLeft === friendsRight && yourRight === friendsLeft)
  ) {
    return true;
  }

  return false;
}



console.info(solution(yourLeft, yourRight, friendsLeft, friendsRight));
