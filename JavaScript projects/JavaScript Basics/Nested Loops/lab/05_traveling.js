function traveling(input){
    let index = 2;
    let destination = input[0];
    let budget = input[1]; 


    while(destination != 'End'){   
        let savedMoney = 0;
        let budget = Number(input[index -1]) 
        while (savedMoney < budget){
            savedMoney += Number(input[index])
            index ++;
        }
        console.log(`Going to ${destination}!`)
        destination = input[index]
        index += 2;
    }
}   
traveling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"]);
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);