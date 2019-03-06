const trains = ['Metro', 'NJ','MTA','Maintenance','Amtrack','Accela'];

for (let i=0; i<trains.length;i++){
	console.log('train is', trains[i]);
}

trains.forEach(function(train, index){	// trainの各要素に対してfunctionを流す
	console.log('wow', train, 'I am index', index);
});

function printTrain(train) {
	console.log(train);
}

trains.forEach(printTrain);


/* Filter */

const num = [7,6,4,9,10,13,100,404,800];

function isEven() {
	if (num % 2 == 0) { //イコール3個は型まで比較する
		return true;
	}
	return false;
}
// console.log(num);

const evenNums = num.filter(isEven); // filter operates forEach and extract items which is true
console.log(evenNums);


/* Class Newer Syntax*/

class Car {
	constructor(make, model, price, color, year){
		this.make = make;
		this.model = model;
		this.price = price;
		this.color = color;
		this.year = year;
	}

	isOld() {
		if (this.year < 2000){
			return true;
		}
		return false;
	}

	isExpensive() {
		if(this.price > 500){
			return true;
		}
		return false;
	}

	start() {
		if(this.isOld()){
			console.log("super!");
		}
		else {
			console.log("newww!");
		}
	}
}

var cars = [
	new Car('isuzu','cooper',400,'blue',1995),
	new Car('toyota','lexus',800,'white',1998),
	new Car('nissan','march',200,'white',2005)
]

const expensiveCars = cars.filter(function(car) {
	return car.isExpensive();
});

console.log(expensiveCars);

// cars.forEach(car) => car.start();
