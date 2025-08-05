function numberInRange(number){
    if (-100 <= number && number < 0){
        console.log("Yes");
    }else if (0 < number && number <= 100){
        console.log("Yes");
    }else
        console.log("No");
}
    numberInRange(-99);