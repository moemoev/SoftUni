function distancePoints(xOne, yOne, xTwo, yTwo){
    let distance = Math.pow(Math.pow((xOne - xTwo), 2) + Math.pow((yOne- yTwo), 2), 1 / 2);

    console.log(distance);
}

distancePoints(2, 4, 5, 0);
distancePoints(2.34, 15.66, -13.55, -2.9985);