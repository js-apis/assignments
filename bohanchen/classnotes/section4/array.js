const trains = ["Metor Train", "NJ Transit", "MIT", "Maintenance", "Amtrack", "Accela"]

for(let i = 0; i<trains.length; i++){
//    console.log("train is:"+trains[i])
}


//for each method
trains.forEach(function(train, index){
//    console.log(train, index)
})

function printTrain(train, index){
//    console.log(train, index)
}

trains.forEach(printTrain)


// filter function
const num = [7,6,9,4,10,404,100,10,13,800]

function checkEven (num){
    if(num%2==0){
        return true
    }
    else{
        return false
    }
}

//num.forEach(checkEven)
// help to construct an array without declare an array first
const evenNums = num.filter(checkEven)

//console.log(evenNums)




// car cases

class Car {
    constructor(make, model, price, color, year){
        this.make = make;
        this.model = model;
        this.price = price;
        this.color = color;
        this.year = year;
    }
    
    isOld(){
        if(this.year <2000){
            return true
        }
        return false
    }
    
    isExpensive() {
        if(this.price > 4000) {
            return true;
        }
        return false;
    }
    
    
    start(){
        if(this.isOld()){
            console.log('boommmming')
        }else{
            console.log('fnacyyyyy')
        }
    }
}
var cars = [
    new Car('isuzu', 'tooper', 4000, "Yellow", 1985),  
    new Car('Audi', 'A4', 25000, "White", 2012),   
    new Car('BMW', '435', 35000, "Black", 2015),   
    new Car('Ford', 'Edge', 12000, "Black", 2006)   
    
]

const expensiveCars = cars.filter(function(car) {
    return car.isExpensive();
});
const cheapCars = cars.filter(function(car) {
    return !car.isExpensive();
});
const newCars = cars.filter(function(car) {
    return !car.isOld();
});
const oldCars = cars.filter(function(car) {
    return car.isOld();
});

cars.forEach(function(car){
    car.start()
})

//console.log(cars)

console.log('expensiveCars \n', expensiveCars, '\n');
console.log('cheapCars \n', cheapCars, '\n');
console.log('oldCars \n', oldCars, '\n');
console.log('newCars \n', newCars, '\n');


















