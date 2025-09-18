function swimmRecord(record, distance, secPerMeter){
    let swimmTime = distance *secPerMeter;
    let delay = Math.trunc(distance / 15)  * 12.5;
    let totalTime = swimmTime + delay;
    if (totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}
swimmRecord(55555.67,3017,5.03);