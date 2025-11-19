function toJson(firstName, lastName, hairColor){

    let object = {
        name : firstName,
        lastName,
        hairColor
    };

    let stringJson = JSON.stringify(object);

    console.log(stringJson);
}