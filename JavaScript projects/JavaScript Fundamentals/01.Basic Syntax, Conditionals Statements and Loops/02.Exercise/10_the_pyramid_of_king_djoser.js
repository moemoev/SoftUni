function djoser(base, height){
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let stepCount = 1;

    while (base >0){

        if (base <= 2){
            gold = (base * base * height);
            break;
        }

        if (stepCount % 5 === 0) {
            stone += Math.max((base -2) * (base -2) * height, 0);
            lapis += (base * base - (base -2) * (base -2)) *height;
        }else{
            stone += Math.max((base -2) * (base -2) * height, 0);
            marble += (base * base - (base -2) * (base -2)) *height;
        }

        stepCount ++;
        base -= 2;
    } 
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(stepCount * height)}`);

}
djoser(11, 1);
djoser(11, 0.75);
djoser(12, 1);
djoser(23, 0.5);