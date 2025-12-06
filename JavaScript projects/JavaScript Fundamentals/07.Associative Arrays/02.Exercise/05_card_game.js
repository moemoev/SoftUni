function solve(play){
    let power = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };

    let type = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,

    };

    let players = new Map();
    
    
    for (let turn of play){
        let [player, cards] = turn.split(': ');

        cards = cards.split(', ');

        for (let card of cards){
            if (!players.has(player)){
            players.set(player, new Set());
            }

            players.set(player, players.get(player).add(card));
        }
    }
    let playersValues = new Map();

    for (let player of players.keys()){
        let valCards = 0;

        for (let card of players.get(player)){

            valCards += power[card.slice(0, -1)] * type[card.slice(-1)];
        }

        playersValues.set(player, valCards);
    }
    

    for (let player of playersValues.keys()){
        console.log(`${player}: ${playersValues.get(player)}`);
    } 
}

solve([
'Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD'
]);

solve([
'John: 2C, 4H, 9H, AS, QS',
'Slav: 3H, 10S, JC, KD, 5S, 10S',
'Alex: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'Slav: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'Alex: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'John: JD, JD, JD, JD'
]);