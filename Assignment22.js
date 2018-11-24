var newArray = [];
var min = parseInt(prompt("Enter the minimum mileage"));
var max = parseInt(prompt("Enter the maximum mileage"));

for(var i = 0; i < 4; i++){
     
    newArray.push(Math.round((Math.random()*(max-min)+min)));
}
console.log(newArray);

 var regular = parseInt(prompt("Enter a price for the regular gas"));
 var premium = parseInt(prompt("Enter a price for the premium gas"));
 var supper = parseInt(prompt("Enter a price for the supper gas"));

var gasPrice = {
 regularPrice: regular,
 premiumPrice: premium,
 supperPrice: supper
};

function Car(make, model, year, mileage, level, tank){
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.level = level;
    this.tank = tank;
    
    this.averageMileage = function(){
    var sum = 0;
    for(var i = 0; i < newArray.length; i++){
        sum+=newArray[i];
    }
     return sum = sum/newArray.length;
        
    }
    
    this.gasConsume = function(){
        if(this.averageMileage() > 0 && this.averageMileage() <= 500){
            return "The car consumes 10% more gas than full tank which is "+(this.tank*0.1);
        }
        else if(this.averageMileage() > 500 && this.averageMileage() <= 1000){
            return "The car consumes 20% more gas than full tank which is "+(this.tank*0.2);
        }
        else if(this.averageMileage() > 1000 && this.averageMileage() <= 5000){
            return "The car consumes 30% more gas than full tank which is "+(this.tank*0.3);
        }
          else if(this.averageMileage() > 5000 && this.averageMileage() <= 10000){
            return "The car consumes 40% more gas than full tank which is "+(this.tank*0.4);
        }
        else{
            return "The car consumes 50% more than full tank which is "+(this.tank*0.5);
        }
    }
    
    this.costOfGas = function(){
        if(this.year === 2018){
            return "Your car needs supper gas which will cost $" + (gasPrice.supperPrice*this.tank);
        }
        else if(this.year >= 2010 && this.year < 2018){
            return "Your car needs premium level gas which will cost $" + (gasPrice.premiumPrice*this.tank);
        }
        else if(this.year >= 2000 && this.year < 2010){
            return "Your car needs regular level gas which will cost $" + (gasPrice.regularPrice*this.tank);
        }
    }
}

var Toyota = new Car("Toyota", "Camry", 2002, 153000, 3, 14);
console.log("The average mileage is "+Toyota.averageMileage());
console.log(Toyota.gasConsume());
console.log(Toyota.costOfGas());
var Nissan = new Car("Nissan", "Altima", 2017, 35000, 5, 15);
console.log(Nissan.gasConsume());
console.log(Nissan.costOfGas());
var BMW = new Car("BMW", "X6", 2018, 150, 5, 16);
console.log(BMW.gasConsume());
console.log(BMW.costOfGas());
