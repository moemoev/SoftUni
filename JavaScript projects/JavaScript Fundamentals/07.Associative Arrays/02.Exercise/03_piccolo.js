function solve(input){

    let parkingLot = new Set();
    
    for (let action of input){

        let [direction, car] = action.split(', ');

        if (direction === 'IN'){
            parkingLot.add(car);
            
        }else{
            parkingLot.delete(car)
        }
        
    }
    if (parkingLot.size === 0){
        console.log('Parking Lot is Empty');
    }else{
        for (let car of Array.from(parkingLot).sort()){
            console.log(car);
        }
    }
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);