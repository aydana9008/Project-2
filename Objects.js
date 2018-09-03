////var plan1Name = "basic";
////var plan1Price = 3.99;
////var plan1Space = 100;
////var plan1Data = 1000;
////var plan1Pages = 10;
////
////var plan2Name = "Professional";
////var plan2Price = 5.99;
////var plan2Space = 500;
////var plan2Data = 5000;
////var plan2Pages = 50;
////
////var plan3Name = "Ultimate";
////var plan3Price = 9.99;
////var plan3Space = 2000;
////var plan3Data = 20000;
////var plan3Pages = 500;
////
////console.log("The cost of the "+plan2Name+" package is $"+plan2Price+" per month.");
//
//
//var plan1 = {
//    name: "Basic",
//    price: 3.99,
//    space: 100,
//    data:1000,
//    pages: 10
//};
//console.log("The first plan is "+plan1.name+" and the cost is $"+plan1.price+" per month with space for " + plan1.space +" MGB");
//
//
//
//var plan2 = {
//    name: "Professional",
//    price: 5.99,
//    space: 500,
//    data: 5000,
//    pages: 50
//};
//console.log("The second plan is "+plan2.name+" and the cost is $"+plan2.price+" per month");
//
//var plan3 = {
//    name: "Ultimate",
//    price:9.99,
//    space: 2000,
//    data: 20000,
//    pages: 500
//};
//console.log("The third plan is "+plan3.name+" and the cost is $"+plan3.price+" per month with a space for "+plan3.space+"MGB");






//var car = {
//    make: "Fiat",
//    model: 500,
//    year: 1957,
//    color: "Medium Blue",
//    passenger: 2,
//    convertable: false,
//    mileage:8800
//};
//
//if(car.mileage < 5000 && car.make=="Fiat"){
//    console.log("buy it!");
//}else{
//    console.log("Dont buy it!");
//}



//plan1.discountMonths=[7, 8, 12];
//plan1.price=0;
//delete plan1.data;
//console.log(plan1);
//console.log("discountMonths" in plan1);








//var salaries = {
//    John: 100,
//    Ann: 160,
//    Pete:130
//};
//if(salaries.John <= 100){
//    salaries.John = 120;
//}if("Adam" in salaries==false){
//    salaries.Adam = 110;
//}
//console.log(salaries);



//var myHonda = {
//    color: "red",
//    wheels:4,
//    engine: {
//        cylinders:4,
//        size:2.2
//    },
//    hp:[300,500,100]
//};
//console.log("My Honda Engine is "+myHonda.engine.size+" and hp is "+myHonda.hp[1]);




//var plan1 = {
//    name: "Basic",
//    price: 3.99,
//    space: 100,
//    data:1000,
//    pages: 10,
//    discountMonths:[7,8,12],
//    calcAnnual: function(percentDisc){
//        var bestPrice;
//    for(var i = 0; i < plan1.discountMonths.length; i++){
//        if(plan1.discountMonths[i] === 7 || plan1.discountMonths[i]== 8 || plan1.discountMonths[i] == 12){
//            bestPrice = plan1.price*percentDisc;
//        }
//    }
//    return bestPrice*12;
//}
//};
//
//console.log(plan1.calcAnnual(0.8));


//
//var car = {
//    make:"HOnda",
//    model:"civic",
//    year:2000,
//    color:"red",
//    mileage: 75000,
//    started:false,
//    start:function(){
//        this.started = true;
//    },
//    stop: function(){
//        this.started = false;
//    },
//    drive: function(){
//        if(this.started){
//            console.log("It is running");
//        }
//        else{
//            console.log("you need to start the engine first");
//        }
//    }
//};
//car.drive();
//car.start();
//car.drive();
//car.stop();
//car.drive();


    


//var song = {
//    name: "Walk This Way",
//    artist: "Run-D.M.C",
//    minutes: 4, 
//    seconds: 3,
//    genre: "80s",
//    playing: false,
//    play: function(){
//        if(!this.playing){
//            this.playing = true;
//            console.log("Playing "+this.name+"by"+this.artist);
//        }
//    },
//    pause: function(){
//        if(this.playing){
//            this.playing=false;
//        }
//    }
//};
//song.play();
//song.pause();



//var newObject= {
//    name: "Aidana",
//    lastName: "Yntyk",
//    yearOfBirth:1990,
//    job: "caregiver",
//    isMarried: false,
//    family:["brother", "sister"],
//    calculateAge: function(){
//        return 2018-this.yearOfBirth;
//    }
//}
//
//console.log(newObject.calculateAge());
//for(i in newObject){
//    console.log(i+":"+newObject[i]);
//}




//var car = {
//    make:"Ford",
//    model:"Mustang",
//    year:1955,
//    color:"black",
//    mileage:281341
//}
//for(a in car){
//    console.log(a+":"+car[a]);
//}



//var object1 = {a: 1, b: 2, c: 3};
//var str = "";
//for(var i in object1){
//    str+=object1[i];
//}
//console.log(str);



//var car = new Object();
//car.make="bmw";
//console.log(car);



//function Hotel(name, rooms, booked){
//    this.name = name;
//    this.rooms = rooms;
//    this.booked = booked;
//    this.checkAvailability = function(){
//        this.room - this.booked;
//    }
//}
//var hiltonHotel = new Hotel("Hilton", 56, 20);
//console.log(hiltonHotel);



//function id(name, lastName, age){
//    this.name = name;
//    this.lastName = lastName;
//    this.age = age;
//}
//var obj1 = new id("John", "Mike", 20);
//var obj2 = new id("Mike", "John", 25);
//var obj3 = new id("Kevin", "Eric", 30);
//var obj4 = new id("Eric", "Kevin", 32);
//
//for(var i in obj2){
//    console.log(obj2[i]);
//}




//function Rectangle(width, height){
//    this.width = width;
//    this.height = height;
//    this.area = function() { 
//        console.log(this.width*this.height);
//    };
//}
//
//var newObj = new Rectangle(5, 6);
////console.log(newObj.area());
//newObj.area();
//var newObj2 = new Rectangle(6, 8);
////console.log(newObj2.area());




//function plan(name, monthlyRate, space, data, pages, discount){
//    this.name = name;
//    this.monthlyRate = monthlyRate;
//    this.space = space;
//    this.data = data;
//    this.pages = pages;
//    this.discount = discount;
//    this.calcDisc = function(percent){
//        //var bestPrice = this.monthlyRate;
//        for(var i = 0; i < this.discount.length; i++){
//            if(this.discount[i] === 7 || this.discount[i] == 8 || this.discount[i]=== 12){
//               var bestPrice = (this.monthlyRate - this.monthlyRate*percent)*12;
//                break;
//            }
//            else{
//               var bestPrice= this.monthlyRate*12;
//            }
//        }
//        return bestPrice;
//    }
//}
//var basic = new plan("Basic", 3.99, 100, 1000, 10, [7, 8]);
//console.log(basic.calcDisc(0.2));
//var pro = new plan("Professional", 5.99, 500, 5000, 50, [7, 8, 12]);
//console.log(pro.calcDisc(0.2));
//var ult = new plan("Ultimate", 9.99, 2000, 20000, 500, [7,8]);
//console.log(ult.calcDisc(0.2));











//isNaN
//var a = "apple";
//console.log(isNaN(a));
//var b = "23";
//console.log(isNaN(b));
//var c = "abc23";
//console.log(isNaN(c));
//var d = " ";
//console.log(isNaN(d));
//var e = 23;
//console.log(isNaN(e));


//toFixed()
//var a = 213.73145;
//console.log(a.toFixed());
//var b  = 213.73145;
//console.log(b.toFixed(3));
//var c = 213.73645;
//console.log(c.toFixed(2));
//var d = 2.13e+15;
//console.log(d.toFixed(2));


//toPrecision()
//var a = 13.3714;
//console.log(a.toPrecision());
//console.log(a.toPrecision(2));
//console.log(a.toPrecision(3));
//console.log(a.toPrecision(10));
//
//var b = 0.001658853;
//console.log(b.toPrecision());
//console.log(b.toPrecision(2));
//console.log(b.toPrecision(3));
//console.log(b.toPrecision(10));




//var c = 123456;
//console.log(c.toExponential());
//var c = 123.45;
//console.log(c.toExponential());




//toString()
//var num = 15+3;
//var str = num.toString()+3;
//console.log(num);
//console.log(str);



//var s1 = "dfgsdA08awq #23423wefa^$#saaag5345sfs";
//var countnon = 0;
//var countnum = 0;
//for(var i = 0; i < s1.length; i++){
//    if(isNaN(s1.charAt(i)) || s1.charAt(i)===" "){
//      countnon++;
//       }
//       else{
//       countnum++;
//       
//       }
//}
//
//console.log(countnon);
//    console.log(countnum);





//math.floor();
//var a = Math.floor(0.60);
//console.log(a);
//var b  = Math.floor(0.40);
//console.log(b);
//var c = Math.floor(5);
// console.log(c);
//var d = Math.floor(-5.1);
//console.log(d);
//var e = Math.floor(-5.9);
//console.log(e);
//var f = Math.floor(5.1);
//console.log(f);


//math.ceil();
//var a = Math.ceil(0.60);
//console.log(a);
//var b = Math.ceil(0.40);
//console.log(b);
//var c = Math.ceil(5);
//console.log(c);
//var d = Math.ceil(5.1);
//console.log(d);
//var e = Math.ceil(-5.1);
//console.log(e);
//var f = Math.ceil(-5.9);
//console.log(f);



//Math.random();
//var a = Math.random();
//console.log(Math.round(a));
//var b = Math.random()*10+1;
//console.log(b);
//var c = Math.random()*100+10;
//console.log(c);



var a =Math.random()*200+0;
if(a > 100){
    console.log(Math.floor(a) +" is greater than 100");
}
else{
    console.log(Math.floor(a)+" is smaller than 100");
}
















































