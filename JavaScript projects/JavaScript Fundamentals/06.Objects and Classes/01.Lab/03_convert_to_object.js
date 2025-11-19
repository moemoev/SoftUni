function stringToObject(jsonString){

    let object = JSON.parse(jsonString);

    for ([key, value] of Object.entries(object)){
        console.log(`${key}: ${value}`);
    }

}