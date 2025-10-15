function reverseInPlace(arr){
//    console.log(`${arr.reverse().join(' ')}`)   -- fastes solution, not the algorithm asked by the exercise
    let midIndex = Math.floor(arr.length / 2) - 1;

    for(let i = 0; i <= midIndex; i++){
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    console.log(`${arr.join(' ')}`);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);