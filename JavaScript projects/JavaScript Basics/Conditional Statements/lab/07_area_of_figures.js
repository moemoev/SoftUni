function areaFigures(figure, numberOne, numberTwo){
    let result;
    if (figure == 'square'){
        result = numberOne * numberOne;
    }else if (figure === 'rectangle'){
        result = numberOne * numberTwo;
    }else if (figure === 'circle'){
        result = Math.PI * numberOne * numberOne;
    }else if (figure === 'triangle'){
        result = numberOne * numberTwo / 2;
    }

    console.log(result.toFixed(3));
}

areaFigures("triangle", 4.5, 20);