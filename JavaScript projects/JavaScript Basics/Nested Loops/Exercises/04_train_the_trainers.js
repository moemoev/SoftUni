function trainers(input){
    let gradesN = Number(input[0]);
    index = 1;
    let cmd = input[index];
    let countProjects = 0;
    let sumAverageGrades = 0;

    while (cmd != "Finish"){
        let averageGrade = 0;
        
        for(let i = (index + 1); i <= (index + gradesN); i++){
            averageGrade += Number(input[i])
        }

        sumAverageGrades += (averageGrade / gradesN);
        countProjects ++;
        index += gradesN +1
        console.log(`${cmd} - ${(averageGrade / gradesN).toFixed(2)}.`)
        cmd = input[index];
    }
    console.log(`Student's final assessment is ${(sumAverageGrades / countProjects).toFixed(2)}.`);
}
trainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);
trainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"]);