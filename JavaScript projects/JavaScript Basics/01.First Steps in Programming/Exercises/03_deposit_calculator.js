function depositCalculator(deposit, timeInMonths, yearlyInterestRate){
    let totalSum = deposit + timeInMonths * ((deposit * yearlyInterestRate / 100) / 12);
    console.log(`${totalSum}`);
}

depositCalculator(200, 3, 5.7);