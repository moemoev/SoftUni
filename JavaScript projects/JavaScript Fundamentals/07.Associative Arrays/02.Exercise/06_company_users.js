function solve(input){

    let companies = new Map();

    for (let entry of input){
        let [company, user] = entry.split(' -> ');

        if (!companies.has(company)){
            companies.set(company, new Set())
        }

        companies.set(company, companies.get(company).add(user));
    }

    let companiesArray = Array.from(companies.entries());

    for (let company of companiesArray.sort((a, b) => a[0].localeCompare(b[0]))){
        console.log(`${company[0]}`);

        for (let user of company[1]){
            console.log(`-- ${user}`);
        } 
    }

}

solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);
solve(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);