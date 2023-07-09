function fibonacci(num) {
  // type your code here
  if(num === 0){
    return 0
  }
  else if(num === 1){
    return 1
  }
  else{
    fibonacciArray = [0, 1]
    for(let index = 2; index <= num; index++){
      fibonacciArray[index] = fibonacciArray[index - 2] + fibonacciArray[index - 1]
    }
    return fibonacciArray[fibonacciArray.length - 1]
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
