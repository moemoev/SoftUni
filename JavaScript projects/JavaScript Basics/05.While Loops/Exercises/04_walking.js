function walking(input){
    let stepsTarget = 10000;
    let index = 0;
    let sumSteps = 0;

    while(sumSteps < stepsTarget){
        if (input[index] === "Going home"){
            sumSteps += Number(input[index + 1]);
            break 
        }

        sumSteps += Number(input[index]);
        index++;
    }

    if (sumSteps < stepsTarget){
        console.log(`${(stepsTarget - sumSteps)} more steps to reach goal.`);
    }else{
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps - stepsTarget} steps over the goal!`);
    }
}
walking(["1000","1500","2000","6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500","3000","250","1548","2000","Going home","2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);