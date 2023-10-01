// Your code here
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    // Assuming the game field width is 400px, adjust as needed
    let gameFieldWidth = 400;
    let dodgerWidth = 40;
  
    // Check if moving to the right won't exceed the right edge of the game field
    if (left + dodgerWidth < gameFieldWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
