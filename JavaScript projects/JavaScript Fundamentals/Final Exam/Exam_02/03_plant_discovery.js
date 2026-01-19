function solve(input){
    let countInitial = Number(input.shift());
    let plants = new Map();

    for (let i = 0; i < countInitial; i++){
        let [plant, rarity] = input.shift().split('<->');
        let ratedObj = {
            rarity: rarity,
            rating: []
        }

        plants.set(plant, ratedObj);
    }
    let cmd = input.shift();
    while (cmd !== 'Exhibition'){
        let [action, values] = cmd.split(': ');
        let [plant, value] = values.split(' - ');
        
        if (!plants.has(plant)){
            console.log('error');
            cmd = input.shift();
            continue;
        }

        if (action === 'Rate'){
            plants.get(plant).rating.push(Number(value));
        }else if (action === 'Update'){
            plants.get(plant).rarity = value;
        }else if (action === 'Reset'){
            plants.get(plant).rating = [];
        }

        cmd = input.shift();
    }

    console.log('Plants for the exhibition:');

    for (let plant of plants.keys()){
        let avg_rating = 0;
        if (0 < plants.get(plant).rating.length){
            avg_rating = plants.get(plant).rating
                                .reduce((total, n) => total + n, 0) / plants.get(plant).rating.length;
        }

        console.log(`- ${plant}; Rarity: ${plants.get(plant).rarity}; Rating: ${avg_rating.toFixed(2)}`)
    }
}
solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);
solve(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]);