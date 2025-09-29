function printSum(start, end){
    let sum = 0;
    while (start <= end){
        process.stdout.write(`${start} `);
        sum += start;
        start ++;
    }
    console.log(`\nSum: ${sum}`);
}