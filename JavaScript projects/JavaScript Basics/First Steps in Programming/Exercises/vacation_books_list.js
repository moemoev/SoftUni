function scheduledPagesPerDay(countPages, pagesPerHour, countDays){
    let totalTime = countPages / pagesPerHour;
    let timePerDay = totalTime / countDays;
    console.log(`${timePerDay}`);
}

scheduledPagesPerDay(212,20,2);