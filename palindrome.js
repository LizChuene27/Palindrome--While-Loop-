let userInput = prompt("Please enter a word");
console.log(userInput)

function validatePalin(userInput) {
  let left = 0
  let right = userInput.length - 1
  
  while(left<right){
  if (userInput[left] !== userInput[right]){
  return false;
  }
  left += 1;
  right -= 1;
  }
  return true;
}

if (validatePalin(userInput)) {
  console.log(userInput + ' is a palindrome');
} else {
  console.log(userInput + ' is not a palindrome');
}