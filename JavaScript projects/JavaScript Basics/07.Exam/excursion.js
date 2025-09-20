function excursion(numberPeople, numberSleepovers, numberTravelTickets, numberMuseumTickets){
    let pricePerPerson = numberSleepovers * 20 + numberTravelTickets * 1.6 + numberMuseumTickets * 6;
    let priceGroup = numberPeople * pricePerPerson;
    let finalPrice = priceGroup * 1.25;

    console.log(finalPrice.toFixed(2));
}
excursion(20, 14, 30, 6);