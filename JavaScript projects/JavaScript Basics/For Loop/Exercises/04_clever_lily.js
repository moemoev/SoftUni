function cleverLily(age, priceWasher, priceToy){
let birthdayMoney = 10;
let countToys = 0;
let totalMoney = 0;
for (let i = 1; i <= age; i++){
  if (i % 2 === 0){
    totalMoney += birthdayMoney;
    birthdayMoney += 10;
    totalMoney -= 1;
  }else{
    countToys++;
  }
}
totalMoney += countToys * priceToy;

if (priceWasher <= totalMoney){
    console.log(`Yes! ${(totalMoney - priceWasher).toFixed(2)}`);
}else{
    console.log(`No! ${(priceWasher - totalMoney).toFixed(2)}`);
}

}
cleverLily(10,170.00,6);