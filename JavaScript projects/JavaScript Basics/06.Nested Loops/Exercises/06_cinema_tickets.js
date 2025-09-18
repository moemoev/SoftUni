function cinema(input){
    let studendTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let index = 0;
    let cmd = input[index]
    
    while(cmd != "Finish"){
        let movie = cmd;
        index++;
        let seats = Number(input[index]);
        index++;
        let seatsSold = 0;
        
        for (let i = index; i < seats + index; i++){
            let ticketType = input[i];
            
            if (ticketType === "student"){
                studendTicket += 1;
                seatsSold ++;
            }else if (ticketType === "standard"){
                standardTicket += 1;
                seatsSold ++;
            }else if (ticketType === "kid"){
                kidTicket += 1
                seatsSold ++;
            }else{
                index++;
                break
            }

        }
        index += seatsSold;
        console.log(`${movie} - ${(seatsSold / seats * 100).toFixed(2)}% full.`);
        cmd = input[index];
    }
    let totalTickets = standardTicket + studendTicket + kidTicket
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studendTicket / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicket / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket / totalTickets * 100).toFixed(2)}% kids tickets.`);
} 
cinema(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);
cinema(["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End","The Green Mile","17","student","standard","standard","student","standard","student","End","Amadeus","3","standard","standard","standard","Finish"]);