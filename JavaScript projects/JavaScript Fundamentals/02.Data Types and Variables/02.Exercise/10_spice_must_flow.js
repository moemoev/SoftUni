function spice(amountSpice){
    let totalSpice = 0;
    let countDays = 0;
    while (amountSpice >= 100){

        totalSpice += amountSpice - 26;
        amountSpice -= 10;
        countDays++;

    }

    totalSpice = Math.max(totalSpice - 26, 0);

    console.log(countDays);
    console.log(totalSpice);


}
spice(111);
spice(450);