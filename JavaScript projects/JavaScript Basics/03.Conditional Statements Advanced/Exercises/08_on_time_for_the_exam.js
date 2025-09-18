function onTime(hourExam, minuteExam, hourArrival, minuteArrival){
    let totalMinutesExam = hourExam * 60 + minuteExam;
    let totalMinutesArrival = hourArrival * 60 + minuteArrival;
    let delay ;

    if (totalMinutesExam < totalMinutesArrival){
        delay = "Late";
    }else if (totalMinutesExam <= (totalMinutesArrival + 30)){
        delay = "On Time";
    }else{
        delay = "Early";
    }

    let timeDifference = Math.abs(totalMinutesArrival - totalMinutesExam);
    let totalHoursDiff = Math.trunc(timeDifference / 60);
    let totalMinutesDiff = timeDifference % 60;
    
    if (totalHoursDiff === 0){
        if (totalMinutesDiff === 0){
            console.log(`${delay}`);  
        }else if (totalMinutesExam < totalMinutesArrival){
            console.log(`${delay}`);
            console.log(`${totalMinutesDiff} minutes after the start`)
        }else{
            console.log(`${delay}`);
            console.log(`${totalMinutesDiff} minutes before the start`)
        }
    }else{
        if (totalMinutesExam < totalMinutesArrival){
            console.log(`${delay}`);
            if (totalMinutesDiff <= 9){
            console.log(`${totalHoursDiff}:${String(totalMinutesDiff).padStart(2, '0')} hours after the start`);
        }else 
            console.log(`${totalHoursDiff}:${(totalMinutesDiff)} hours after the start`);
        }else{
            console.log(`${delay}`);
            if (totalMinutesDiff <= 9){
            console.log(`${totalHoursDiff}:${String(totalMinutesDiff).padStart(2, '0')} hours before the start`);
        }else 
            console.log(`${totalHoursDiff}:${(totalMinutesDiff)} hours before the start`);
        }
    }
}
onTime(9,00,10,3);