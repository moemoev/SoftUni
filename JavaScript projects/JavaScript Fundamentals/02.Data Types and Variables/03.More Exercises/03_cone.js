function coneProperties(radius, height){
    
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let slantHeight = Math.pow((Math.pow(radius, 2) + Math.pow(height, 2)), 1 / 2);
    let surfaceArea = Math.PI * radius * (radius + slantHeight);
    
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

coneProperties(3, 5);
coneProperties(3.3, 7.8);