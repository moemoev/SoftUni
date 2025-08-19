function histogram(numbers) {
  let n = numbers[0];
  let occurencesNumbers = [0,0,0,0,0]

  for (let i = 1; i < numbers.length; i++) {
    switch(true){
      case numbers[i] < 200:
        occurencesNumbers[0]++;
        break;
      case numbers[i] < 400:
        occurencesNumbers[1]++;
        break;
      case numbers[i] < 600:
        occurencesNumbers[2]++;
        break;
      case numbers[i] < 800:
        occurencesNumbers[3]++;
        break;
      default:
        occurencesNumbers[4]++;
        break;
    }
  }
  for (let i = 0; i < occurencesNumbers.length; i++){
    console.log(`${(occurencesNumbers[i] / n * 100).toFixed(2)}%`);
  }
}
histogram([3,1,2,999]);