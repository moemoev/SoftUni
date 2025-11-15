function sorting(input){
    let slicingIndex = Math.trunc((input.length + 1) / 2);
    input = input.sort((a, b) => b - a);
    let numbersMax = input.splice(0, slicingIndex);
    let numbersMin = input.sort((a, b) => a - b);

    console.log(numbersMax
            .flatMap((n, i) => [n, numbersMin[i]])
            .join(" "));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32,7, 19, 47]);