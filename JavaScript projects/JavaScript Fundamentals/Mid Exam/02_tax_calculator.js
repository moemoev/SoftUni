function taxCalc(input){
    let carsToTax = String(input).split(">>");
    let allowedCars = ['family', 'heavyDuty', 'sports'];
    let taxDecline = 0;
    let taxIncrease = 0;
    let increasePerKm = 0;
    let Revenue = 0;

    while (carsToTax.length !== 0){
        let carToTax = carsToTax.shift().split(" ");
        let carType = carToTax.shift();
        let years = carToTax.shift();
        let kilometers = carToTax.shift();
        let tax = 0;
        let taxPerCar = 0;

        if (!allowedCars.includes(carType)){
            console.log("Invalid car type.");
            continue;
        }

        if (carType === allowedCars[0]){

            tax = 50;
            taxDecline = 5;
            taxIncrease = 12;
            increasePerKm = 3000;

        }else if (carType === allowedCars[1]){
            
            tax = 80;
            taxDecline = 8;
            taxIncrease = 14;
            increasePerKm = 9000;

        }else{
            
            tax = 100;
            taxDecline = 9;
            taxIncrease = 18;
            increasePerKm = 2000;
        }

        taxPerCar = tax - (years * taxDecline) + Math.trunc(kilometers / increasePerKm) * taxIncrease
        
        console.log(`A ${carType} car will pay ${taxPerCar.toFixed(2)} euros in taxes.`);

        Revenue += taxPerCar;
    }

    console.log(`The National Revenue Agency will collect ${Revenue.toFixed(2)} euros in taxes.`);

}    
taxCalc(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]);
taxCalc([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]);