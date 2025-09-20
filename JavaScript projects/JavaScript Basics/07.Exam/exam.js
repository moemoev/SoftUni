function exam(input){
    let countStudents = input[0]
    let topStudents = 0;
    let betweenFourAndFive = 0;
    let betweenThreeAndFour = 0;
    let failedStudents = 0;
    let average = 0;

    for (let i = 1 ; i<= countStudents; i++){
        let studentGrade = input[i];
        average += Number(studentGrade);
        switch(true){
            case(5.00 <= studentGrade):
                topStudents ++;
                break;
            case(4.00 <= studentGrade):
                betweenFourAndFive ++;
                break;
            case(3.00 <= studentGrade):
                betweenThreeAndFour ++;
                break;
            default:
                failedStudents ++;
                break;
        }
    }
    console.log(`Top students: ${(topStudents / countStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(betweenFourAndFive / countStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(betweenThreeAndFour / countStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(failedStudents / countStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(average / countStudents).toFixed(2)}`);
}
exam(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"]);