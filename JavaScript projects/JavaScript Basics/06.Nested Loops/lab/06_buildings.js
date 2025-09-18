function building(floors, flats){
    let output = "";
    for (let i = floors; i > 0; i --){
        for (let k = 0; k < flats; k++){
            if (i === floors){
                output += `L${i}${k} `;
            }else if (i % 2 === 0){
                output += `O${i}${k} `;
            }else{
                output += `A${i}${k} `;
            }
        }
        output += `\n`
    }
    console.log(`${output}`)
}
building(6,4);

building(9,5);