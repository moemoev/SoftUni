function personalTitles(age, gender){
    switch(gender){
        case "m":
            if (16 <= age){
                console.log("Mr.");
            }else{
                console.log("Master");
            }
            break; 
        case "f":
            if (16 <= age){
                console.log("Ms.");
            }else{
                console.log("Miss");
            } 
            break;
        }
}

personalTitles(12,"f");