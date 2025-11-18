function printCityObject(city){
    for (key of Object.keys(city)){
        let value = city[key];
        console.log(`${key} -> ${value}`);
    }
}