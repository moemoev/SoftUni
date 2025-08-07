function workingHours(time, day){
    switch(day){
        case "Sunday":
            console.log("closed");
            break;
        default:
            if (10 <= time && time <= 18){
                console.log("open");
            }else{
                console.log("closed");
            }
            break;
    }
}

workingHours(11,"Monday");