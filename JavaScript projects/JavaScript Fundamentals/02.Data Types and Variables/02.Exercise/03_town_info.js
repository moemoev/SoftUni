function town(town, population, area){
    let allDataValid = true;

    if(typeof(town) !== 'string' || town.length < 3){
        console.log('Town name must be at least 3 characters!');
        allDataValid = false;
    }

    if(typeof(population) !== 'number' || population < 0){
        console.log('Population must be a positive number!');
        allDataValid = false;
    }
    
    if(typeof(area) !== 'number' || area < 0){
        console.log('Area must be a positive number!');
        allDataValid = false;
    }
    if(allDataValid){
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    }
}