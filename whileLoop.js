
/*

var expectedUser = "Aidana";
var expectedPasss = "abc1234";

do{
    var user =prompt("Enter your username");
var pass = prompt("Enter your password");
}while(user !== expectedUser || pass !== expectedPasss);
alert("You are logged in");

*/
/*

var expectedUser = "Aidana";
var expectedPasss = "abc1234";


while(user !== expectedUser || pass !== expectedPasss){
    alert("Enter valid info");
    var user =prompt("Enter your username");
var pass = prompt("Enter your password");
}
alert("You are logged in");



*/



/*do{
    var num = parseInt(prompt("Enter any number between 1 - 20"));
    if(num < 10){
        alert("Your number is too small");
    }
    else if (num <= 14){
        alert("It is too hot in here");
    }
    else if(num > 15 && num<= 20){
        alert("The secret number is smaller");
    }

}
while(num !== 15);

alert("Congratulations!!! You guessed the number!!");

*/

/*var user;

while(user !== 5){
    user = parseInt(prompt("Enter the secret number between 1 and 20"));
    if(user < 5){
        console.log("The number is too small");
    }
    else if(user >= 10 && user <= 20){
       alert("The number is too large");
    }
    else if(user > 5 && user <= 9){
        console.log("You are very close!");
    }
    else{
        alert("You are right!");
    }
}

*/



//Branching Statements:



/*var num1, num2, sum;

while(true){
 num1 = parseInt(prompt("Enter first number"));
    num2 = parseInt(prompt("Enter second number"));
     sum = num1 + num2;
    if(num1 < 0 || num2 < 0){
        break;
    }
    console.log(sum);
   
}

*/

/*do{
     num1 = parseInt(prompt("Enter first number"));
    num2 = parseInt(prompt("Enter second number"));
     sum = num1 + num2;
     if(num1 < 0 || num2 < 0){
        break;
}
    console.log(sum);
}
while(true);
*/


/*
var i = 0; 
while(i<6){
    if (i === 3){
        break;
    }
    i++;
    console.log(i);
}

*/



/*
do{
var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var sum = num1 + num2;
    
    if(num1 <0 || num2 < 0){
        break;
    }
    console.log(sum);
} while(num1 > 0 || num2 > 0);


*/

/*var sum = 0;
for(var i = 1; i <=5; i++){
var num1 = parseInt(prompt("Enter your number"));

      if(num1 <=0){
          continue;
      }
          sum+= num1;  
console.log(sum);
}

console.log("The total is: "+ sum);




var start = 1;
var sum = 0;
do{
    if(start%2 === 0){
        continue;
    }
    sum+= start;
}while(++start<=10);
console.log(sum);
*/

//1+3+5+7+9= 25





//var hourlyRate = 15;
//var hours = parseInt(prompt("Enter the amount of hours you worked"));
//sum = hourlyRate* hours;
//
//console.log("You worked "+ hours+" hours this week and you made $"+ sum);


//var sum = 0;
//var num1;
//for(var i = 0; i <4; i++){
//    num1 = parseInt(prompt("Enter your number"));
//    sum+= num1;
//}
//console.log(sum=sum/4);

//var user = parseInt(prompt("Enter your number"));
//  if(user %2 === 0){
//      console.log(user + " is even number");
//  }
//else{
//    console.log(user+" is odd number");
//}


//var user = parseInt(prompt("Enter the score you earned"));
//if(user >90 && user < 100){
//    console.log("The grade is A");
//}
//else if(user > 80 && user < 90){
//    console.log("The grade is B");
//}
//else if(user > 70 && user < 80){
//    console.log("The grade is C");
//}
//else if(user < 70 && user >= 0){
//    console.log("The grade is F");
//}
//else{
//    console.log("Enter appropriate amount of points!");
//}


//var price = parseInt(prompt("Enter the price for the product"));
//var quantity = parseInt(prompt("Enter the quantity of the product"));
//var revenue = price *quantity;
//if(revenue< 3000){
//    console.log("For the amount of $"+revenue + ", there is no discount");
//}
//else{
//    if(revenue>= 3000 && revenue < 5000){
//     var calc = revenue-revenue*0.15; 
//         console.log("For the amount of $"+revenue + ", there is 15% discount. The total is: "+ calc);
//    }
//    else if(revenue>= 5000 && revenue < 10000){
//        var calc = revenue- revenue* 0.25;
//        console.log("For the amount of $"+revenue + ", there is 25% discount. The total is: "+ calc);
//    }
//    else{
//        var calc = revenue- revenue*0.40;
//        console.log("For the amount of $"+revenue + ", there is 40% discount. The total is: "+ calc);
//    }
//}


//var user = prompt("Choose one of these cars: Toyota, Ferrari, Mercedes, or any other car model");
//switch(user){
//    case "Toyota":
//        console.log("Good for uber");
//        break;
//    case "Ferrari":
//        console.log("Good for race");
//        break;
//    case "Mercedes":
//        console.log("Good for luxury");
//        break;
//    default:
//        console.log("Do not buy that one!");
//}


//for(var i = 0; i < 20; i++){
//    console.log("I will find $100K job in 5 months");
//}

//  str = "";
//
//var user = parseInt(prompt("Enter your number"));
//
//for(var i = 0; i <=10; i++){
//    for(var j  = 0; j <1; j++){
//        str= user*i;
//   
//    }
//     console.log(user +"*"+i+" = "+str);
//    
//}



//str = "";
//for(var i = 0; i<=10; i++){
//    str = user*i;
//    console.log(user+"*"+i+" = "+str);
//
//}




//while loop
//var i = 1;
//var str = 0;
//var user = parseInt(prompt("Enter your number"));
//while(i <= 10){
//    str = user * i;
//    console.log(user+"*"+i+" = "+str);
//    i++;
//}




//
//var i = 0;
//while(i <15){
//    console.log(i);
//    i++;
//}





//var i = 0;
//do{
//    console.log(i);
//    i++;
//}while(i< 15);



//do while

//var i = 1;
//do{
//    if(i%5 === 0 || i%7 === 0){
//        console.log(i);
//    }
//    i++;
//}while(i <=100);


//for(var i = 1; i <= 100; i++){
//    if(i%5 === 0 || i %7 === 0){
//        console.log(i);
//    }
//}




//var str= "";
//var count = 0;
//for(var i = 1;  i < 6; i++){
//    var user = parseInt(prompt("Enter your number"));
//    if(user >= 10 && user <= 20){
//        count++;
//        str+= user+ " ";
//        
//    }
//    }
//console.log(str);
// console.log("You entered "+ count+ " numbers in range between 10 and 20");







//var count = 0;
//var str = "";
//for(var i = 1; i <=50; i++){
//    if(i%3 === 0 || i%5=== 0){
//        count++;
//        str+= i+ " ";
//    }
//}
//console.log(str);
//console.log("The total amount of acceptable numbers are "+count);






var sum = 0;
var total;
//while(num > 0){
//     var num = parseInt(prompt("Enter any number"));
//    if(num % 2===0){
//      sum+= num;  
//    }
//    else{
//        sum = sum - num;
//    }
//    total = sum;
//}
//console.log('The total is '+total);



do{
    var num = parseInt(prompt("Enter any number"));
    if(num %2 === 0){
        sum+= num;
    }
    else{
        sum-= num;
    }
    
}while(num !== 0);
console.log("The total is "+sum);
















































































































































