function solve(input){

    let partyStarts = false;
    let guestList = [];

    while(!partyStarts){
        let guestName = input.shift();

        if (guestName === 'PARTY'){
            partyStarts = true;
            continue;
        }else{
            guestList.push(guestName)
        }
    }

    for (let guest of input){
        let index = guestList.indexOf(guest);
        guestList.splice(index, 1)
    }
    
    let vipGuests = guestList.filter(a => a.charCodeAt(0) >= 49 && a.charCodeAt(0) <= 57);
    let nonVipGuests = guestList.filter(a => a.charCodeAt(0) < 49 || a.charCodeAt(0) > 57);
    
    let missingGuests = vipGuests.concat(nonVipGuests);

    console.log(missingGuests.length);
    for (let guest of missingGuests){                                   
    console.log(guest);
    }
}

solve(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ]);
solve(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ]);