function suppliesForSchool(countPencils, countMarkers, fluidInLiters, discountInPercent){
let totalSum = countPencils * 5.8 + countMarkers * 7.2 + fluidInLiters * 1.2;
let discount = totalSum *  discountInPercent / 100;
console.log(`${totalSum - discount}`);
}

suppliesForSchool(2,3,4,25);