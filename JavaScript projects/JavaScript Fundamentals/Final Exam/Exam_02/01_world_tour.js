function solve(input){
    let route = input.shift();
    let cmd = input.shift();

    while (cmd !== 'Travel'){
        cmd = cmd.split(':');
        let action = cmd.shift();

        if (action === 'Add Stop'){
            let index = Number(cmd.shift());
            let stop = cmd.shift();
            
            if (0 <= index && index < route.length){
            route = route.slice(0, index) + stop + route.slice(index , route.length);
            }

        }else if (action === 'Remove Stop'){
            let start = Number(cmd.shift());
            let end = Number(cmd.shift());

             if ((0 <= start && start < route.length) && 0 <= end && end < route.length){
            route = route.slice(0, start) + route.slice(end + 1, route.length);
            }

        }else if (action === 'Switch'){
            let oldString = cmd.shift();
            let newString = cmd.shift();
            
            if (route.includes(oldString)){
                route = route.replace(oldString, newString);
            }
        }
        console.log(`${route}`);

        cmd = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${route}`);
}

solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);
solve(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]);
