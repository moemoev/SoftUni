function salary(input){
    let countTabs =  input[0];
    let salary = input[1]
    
    for (let i = 0; i < countTabs; i++){
        switch (input[i+2]){
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
            default:
                break;
        }
        if(salary <= 0){
            console.log(`You have lost your salary.`);
            return;
        }
    }
    
console.log(`${Math.floor(salary)}`);
    
}
salary([10,750,"Facebook","Dev.bg","Instagram","Facebook","Reddit",
"Facebook","Facebook"]);