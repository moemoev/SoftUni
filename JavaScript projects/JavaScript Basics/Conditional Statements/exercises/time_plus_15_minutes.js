function timePlusMinutes(hours, minutes){
    let totalMinutes = hours * 60 + minutes + 15;
    let newHours = Math.trunc(totalMinutes / 60);
    if (newHours === 24)
        newHours = 0;
    let newMinutes = totalMinutes % 60;
    console.log(`${newHours}:${String(newMinutes).padStart(2,'0')}`);
}
timePlusMinutes(23,59);