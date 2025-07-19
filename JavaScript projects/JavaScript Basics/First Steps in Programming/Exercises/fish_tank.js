function fishTank(height, width, length, percentage){
    let volumeTank = height * width * length * 0.001;
    let amountWater = volumeTank * (1 - percentage / 100);
    console.log(`${amountWater}`);
}

fishTank(85,75,47,17);