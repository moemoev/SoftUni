function calcExpenses(lostFights, costHelmet, costSword, costShield, costArmor){

    let expenses = 0;
    let countShieldBroken = 0;

    for(let fight = 1; fight <= lostFights; fight++){
        if (fight % 2 === 0){
            expenses += costHelmet;
        }

        if (fight % 3 === 0){
            expenses += costSword;
        }

        if (fight % 6 === 0){
            expenses += costShield;
            countShieldBroken++;
        }

        if (countShieldBroken === 2){
            expenses += costArmor;
            countShieldBroken = 0;
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
calcExpenses(7, 2, 3, 4, 5);
calcExpenses(23, 12.50, 21.50, 40, 200);