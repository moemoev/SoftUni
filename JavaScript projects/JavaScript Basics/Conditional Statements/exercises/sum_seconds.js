function sumSeconds(first, second, third){
    let totalSeconds = first + second + third;
    let minutes = Math.trunc(totalSeconds / 60) ;
    let seconds = totalSeconds % 60 ;
    let displaySeconds = String(seconds).padStart(2,'0');
    console.log(`${minutes}:${displaySeconds}`);
}
sumSeconds(22, 7, 34);