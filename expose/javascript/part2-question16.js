let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for(const firstL in statistics){
    if(firstL.startsWith('r') || statistics[firstL] % 2 != 0){
        console.log(statistics[firstL]);
    }
}