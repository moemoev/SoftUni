function readText(input){
    let index = 0;
    let stopNotFound = true;
    
    while(stopNotFound){
        if (input[index] === "Stop"){
            stopNotFound = false;
            break;
        }
        console.log(`${input[index]}`);
        index ++;
    }
}
readText(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);