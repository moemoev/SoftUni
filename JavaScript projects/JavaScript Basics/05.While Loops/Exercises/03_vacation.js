function vacation(input){
    let index = 2;
    let targetMoney = Number(input[0]);
    let startMoney = Number(input[1]);
    let spendToOften = false;
    let spendConsecutively = 0;

    while (startMoney <  targetMoney){
        let income = input[index];
        let money = Number(input[index + 1]);

        if (income === "save"){ 
            startMoney += money;
            spendConsecutively = 0;
        }else{
            startMoney -= money;
            if (startMoney < 0)
                startMoney = 0;
            spendConsecutively ++;
        }
        if (spendConsecutively === 5){
            spendToOften = true;
            break;
        }

        index += 2;
    }
    if (!spendToOften){
        console.log(`You saved the money for ${(index - 2) / 2} days.`);
    }else{
        console.log(`You can't save the money.`);
        console.log(`${(index) / 2}`);
    }
}
vacation(["2000","1000","spend","1200","save","2000"]);
vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"]);