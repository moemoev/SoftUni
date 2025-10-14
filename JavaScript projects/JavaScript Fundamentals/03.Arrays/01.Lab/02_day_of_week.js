function weekday(number){
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    if(1 <= number && number <= 7){
        console.log(`${days[number - 1]}`);
    }else{
        console.log(`Invalid day!`);
    }
}
weekday(3);
weekday(6);
weekday(11);