function vacation(groupSize, groupType, day){
    let totalPrice;

    if(groupType === 'Business' && 100 <= groupSize){
        groupSize -= 10;
    }

    switch(day){
        case 'Friday':
            switch(groupType){
                case 'Students':
                    totalPrice = groupSize * 8.45;
                    break;
                case 'Business':
                    totalPrice = groupSize * 10.9;
                    break;
                case 'Regular':
                    totalPrice = groupSize * 15;
                    break;
                default:
                    break;
            }
            break;
        case 'Saturday':
            switch(groupType){
                case 'Students':
                    totalPrice = groupSize * 9.8;
                    break;
                case 'Business':
                    totalPrice = groupSize * 15.6;
                    break;
                case 'Regular':
                    totalPrice = groupSize * 20;
                    break;
                default:
                    break;
            }
            break;
        case 'Sunday':
            switch(groupType){
                case 'Students':
                    totalPrice = groupSize * 10.46;
                    break;
                case 'Business':
                    totalPrice = groupSize * 16;
                    break;
                case 'Regular':
                    totalPrice = groupSize * 22.5;
                    break;
                default:
                    break;
            }
            break;
    }
    if(groupType === 'Students' && 30 <= groupSize){
        totalPrice *= 0.85;
    }else if(groupType === 'Regular' && 10 <= groupSize && groupSize <= 20){
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}