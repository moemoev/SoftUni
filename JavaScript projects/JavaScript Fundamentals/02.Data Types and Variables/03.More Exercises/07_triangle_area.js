function triangleArea(sideA, sideB, sideC){
    
    let semiPerimeter = (sideA + sideB + sideC) / 2;
    let s = semiPerimeter;

    let area = Math.pow((s * (s - sideA) * (s - sideB) * (s - sideC)), 1 / 2);

    console.log(area);
}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);