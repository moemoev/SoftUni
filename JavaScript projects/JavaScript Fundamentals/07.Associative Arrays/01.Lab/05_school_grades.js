function solve(input){

    let studentGrades = new Map();

    for (let el of input){
        let [student, ...rest] = el.split(' ');
        let grades = rest.map(Number);
        
        if (!studentGrades.has(student)){
            studentGrades.set(student, grades);
        }else{
            let newGrades = studentGrades.get(student);

            for (let grade of grades){
                newGrades.push(grade);
            }
        }
    
    }

    for (let[student, grades] of studentGrades.entries()){
        let countGrades = grades.length;
        
        studentGrades.set(student, (grades.reduce((acc, curr) => acc + curr, 0) / countGrades).toFixed(2))
    }

    for (let [student, avgGrade] of Array.from(studentGrades.entries()).sort((a, b) => a[0].localeCompare(b[0]))){
        console.log(`${student}: ${avgGrade}`);
    }
}

solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);

solve(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);