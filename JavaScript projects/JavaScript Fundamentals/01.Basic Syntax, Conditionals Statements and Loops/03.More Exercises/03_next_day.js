function nextDay(year, month, day){
    let today = new Date(year, month - 1, day);
    today.setDate(today.getDate() + 1);
    let newYear = today.getFullYear();
    let newMonth = today.getMonth() + 1;
    let newDay = today.getDate();
    let date = [newYear, newMonth, newDay]

    console.log(date.join("-"));
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
nextDay(1901, 1, 1)