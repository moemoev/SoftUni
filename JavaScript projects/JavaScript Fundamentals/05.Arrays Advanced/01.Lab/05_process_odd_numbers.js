function oddNumbers(numbers){
  /*  let result = [];
    
    for (let i = numbers.length - 1; i > 0; i--){
        if (i % 2 === 1){
        result.push(2 * numbers[i]);
        }
    }

    return `${result.join(" ")}`;
*/  
// above my initial go before listening to compelte lecture and decided to rush

// below the usage of .filter .map and arrow function and here JS's beauty starts to shine thorugh a bit
// seems i was a bit to harsh judging it, let's see if i can get to like JS after all....


let oddIndexFilteredNumbers = numbers
    .filter((_, index) => index % 2 === 1)  // value param not needed so --> '_'
    .map(n => 2 * n)
    .reverse();

return oddIndexFilteredNumbers
    .join(" ");

}
console.log(oddNumbers([10, 15, 20, 25]));
console.log(oddNumbers([3, 0, 10, 4, 7, 3]));