function lunchBreak(seriesName, timeEpisode, timeBreak){
    let timeLunch = timeBreak * 0.125;
    let timeRecovery = timeBreak * 0.25;
    let neededTime = timeEpisode + timeLunch + timeRecovery;

    if (neededTime <= timeBreak){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeBreak - neededTime)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(neededTime - timeBreak)} more minutes.`);
    }
}

lunchBreak("Teen Wolf", 48, 60);