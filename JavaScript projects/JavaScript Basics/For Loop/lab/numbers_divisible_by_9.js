function numbersDivisibleByNine(lowerBound, upperBound){
  let numbers = [];
  
  for (let i = lowerBound; i <= upperBound; i++){
    if (i % 9 === 0){
      numbers.push(i);
    }
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(`The sum: ${sum}`);
  
  for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
  }

}
numbersDivisibleByNine(100, 200);