function processOddNumbers(number){
  let  oddPositions = [];

  for(let i = 0; i < number; i ++){
    oddPositions.shift(number);
  }
  console.log(oddPositions);
    
}
processOddNumbers([10, 15, 20, 25])