function solve(input){
    let regExp = /(#|\|)(?<food>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>(?:0|[1-9]\d{0,3}|10000))\1/g;
    let matches = input[0].matchAll(regExp);

    let food = [];
    let calories = 0;

    for (let match of matches){
        food.push([match.groups.food, match.groups.date, match.groups.calories]);
        calories += Number(match.groups.calories);
    }
    console.log(`You have food to last you for: ${Math.floor(calories / 2000)} days!`);
    for (let el of food){
        console.log(`Item: ${el[0]}, Best before: ${el[1]}, Nutrition: ${el[2]}`);
    }
}
solve([
'#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
solve([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);