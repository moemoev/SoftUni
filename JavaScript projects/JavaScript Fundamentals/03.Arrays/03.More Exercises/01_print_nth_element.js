function printNthElmnt(elements){

    let step = Number(elements.pop());
    let output = [];

    for (let i = 0; i < elements.length; i += step){
        output.push(elements[i]);
    }

    console.log(output.join(" "))
}

printNthElmnt(['5', '20', '31', '4', '20', '2']);
printNthElmnt(['dsa', 'asd', 'test', 'test', '2']);
printNthElmnt(['1', '2', '3', '4', '5', '6']);