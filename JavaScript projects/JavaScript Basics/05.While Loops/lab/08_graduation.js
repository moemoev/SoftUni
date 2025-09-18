function graduation(input){
    let sumFails = 0;
    let nameStudent = input[0];
    let averageGrade = 0;
    let yearlyGrade = Number(input[1]);
    let index = 1;
    let gradeYear = 1; 

    while ((gradeYear < 13) && sumFails < 2){
        yearlyGrade = Number(input[index]);

        if (yearlyGrade < 4.00){
            sumFails ++;
            index ++;
            continue;
        }
        averageGrade += yearlyGrade;
        gradeYear ++;
        index++;
        
    }
        if (sumFails === 2){
        console.log(`${nameStudent} has been excluded at ${gradeYear} grade`);
    }else{
        console.log(`${nameStudent} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`)
    }
}
//graduation(["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])