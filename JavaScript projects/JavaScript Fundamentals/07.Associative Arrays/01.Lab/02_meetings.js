function meetings(input){

    let meetingWeekdays = {};

    for (let el of input){

        let[weekday, name] = el.split(' ');

        if (meetingWeekdays.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`);
        }else{
            meetingWeekdays[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }   

    for (let weekday in meetingWeekdays){
        console.log(`${weekday} -> ${meetingWeekdays[weekday]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);