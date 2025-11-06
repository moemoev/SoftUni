function rotateArray(input){
    let rotations = Number(input.pop());

    while (0 < rotations){
        input.unshift(input.pop());
        rotations--;
    }

    console.log(input.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);