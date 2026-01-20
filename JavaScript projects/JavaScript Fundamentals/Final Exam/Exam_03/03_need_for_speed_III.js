function solve(input){
    let numberCars = Number(input.shift());
    let cars = new Map();

    for (let i = 0; i < numberCars; i++){
        let [car, mileage, fuel] = input.shift().split('|');    
        let carObj = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
        cars.set(car, carObj);
    }

    let cmd = input.shift();

    while (cmd !== 'Stop'){
        cmd = cmd.split(' : ');
        let action = cmd.shift();
        let car = cmd.shift();

        if (action === 'Drive'){
            let distance = Number(cmd.shift());
            let fuel = Number(cmd.shift());

            if (cars.get(car).fuel < fuel){
                console.log("Not enough fuel to make that ride");
                cmd = input.shift();
                continue;
            }else{
                let carObj = cars.get(car);
                carObj.mileage += distance;
                carObj.fuel -= fuel;

                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if (100000 <= cars.get(car).mileage){
                console.log(`Time to sell the ${car}!`);
                cars.delete(car);
            }
        }else if (action === 'Refuel'){
            let fuel = Number(cmd.shift());
            let carsFuel = cars.get(car).fuel;
            
            if (75 < (carsFuel + fuel)){
                fuel = 75 - carsFuel;
                carsFuel = 75;

            }else {
                carsFuel += fuel;
            }

            console.log(`${car} refueled with ${fuel} liters`);

        }else if (action === 'Revert'){
            let kilometers = Number(cmd.shift());
            let carMileage = cars.get(car).mileage;

            if ((carMileage - kilometers) < 10000){
                carMileage = 10000;
            }else{
                carMileage -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
        cmd = input.shift();
    }

    for (let [car, carObj] of cars.entries()){
        console.log(`${car} -> Mileage: ${carObj.mileage} kms, Fuel in the tank: ${carObj.fuel} lt.`);
    }

}
solve([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop']);