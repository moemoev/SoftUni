function heroInventory(input){

    let heroes = [];
    
    while (input.length > 0){
        let heroInfo = input.shift().split(' / ')
        let hero = {
            Hero : heroInfo[0],
            level :  Number(heroInfo[1]),
            items : heroInfo[2]
        }

        heroes.push(hero);

    }
    for (let hero of heroes.sort((a, b) => a.level - b.level)){
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

heroInventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);