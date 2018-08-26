

/*
for(var i = 1; i <= 7; i++){
    var str = "";
    for(var j = 1; j <= i; j++){
      str += i;
    }
    
    console.log(str);
}

*/

/*

for(var i = 1; i <= 5; i++){
    for(var p = 1; p <= i; p++){
        console.log('*');
        }
    console.log("\n");
    }*/



//Q2 nested for loop
/*var str = "";
var str1 = " ";
var str2 = " ";

for (var i = 4; i >= 1; i--){
    str+= i + "  ";
    for(var j = 3; j >= 1; j--){
        str1 += j + " ";
        }
}
console.log(str);
console.log(str1);


*/

/*var str = "";
var str1 = " ";
var str2 = " ";

for (var i = 4; i >=1; i--){
    str+= i;
    for(var j = 3; j >= 3; j--){
        str1 +=+ j+"  ";
        }
    str2+= +i+"  ";
    
}
console.log(str);
console.log(str2);

*/
//console.log(str1); 
/*var str1 = "";
var str="";
for(var i = 1; i <= 4; i++){
    for(var j = 1; j <= 4; j++){
        str += j;
      
        
    }
  document.write(str + "<br />);

    str="";
    
}
*/

/*
for(var i = 0; i < 5; i++){
    for(var j = 0; j < i; j++){
       document.write(".");
    }
    for(var j = 0; j < 5-i; j++){
       document.write("* ");  
    }
      document.write("<br />");
}
*/



/*
var str="";
for(var i =0; i <4; i++){
    for (var j = 0; j < 5; j++){
        str+= "*" +" "; 
    }
    document.write(str);
   document.write("<br/>");
    str = "";
}

*/
/*
var str= "";
for (var i = 1; i <=7; i++){
    for (var j = 1; j <= i; j++) {
        str+=i + " ";
    }
    
    console.log(str);
    str = "";
      
}


*/
/*good example
var str1 = "";
var str = "";
for(var i = 4; i>=1; i--){
    for(var j = 4; j >= 1; j--){
        str1 += j;
        
       
    }
    console.log(str1+ " ");
     str1 = "";
}

*/


//Q2!!
/*var str = "";
var str1 = "";
for(var i = 4; i>=1; i--){
     document.write("<br/>");
    for(var j =7-i; j >= i; j--){
        document.write("&nbsp");
    }
    for(var j = i; j >= 1; j--){
        str1 +=" "+ j+ "&nbsp&nbsp";
        document.write(str1);
        str1 = "";
    }
}
*/







/*var str = " ";
var str1 = "";
for(var i = 4; i>=1; i--){
    for(var j =5-i; j >= 2; j--){
    }
     console.log(". ");
    for(var j = i; j >= 1; j--){
        str1 +=" "+ j+ " ";
        
    }
    console.log(str1);
    str1="";
}

*/



/*for(var i = 4; i >=1; i--){
      for(var j = 5-i; j >=2 ; j--){
        document.write("&nbsp&nbsp");
    }
    for(var j =i; j >= 1; j--){
        document.write(j + "&nbsp&nbsp");
    }
    document.write("<br/>");
}

*/

/* table one
var num = 10;
var str = "";
for(var i = 1; i <=10; i++){
    for(var j = i; j <= i * num; j+=i){
        str+= j+ " ";
    }
    console.log(str);
    str = "";
}

*/



/*
var str = "";
for(var i = 1; i <= 10; i++){
    for(var j = i; j <= i*10; j+=i){
        str += j + " ";
    }
    console.log(str);
    str = "";
}


*/
/*
var str = "";
for(var i = 1; i <= 7; i++){
    for(var j = i; j >=1 ; j--){
       str+= i+ " "; 
    }
    console.log(str);
    str = "";
}


*/

/*var str = "";

for(var i = 1; i <= 7; i++){
for(var j = 1; j <= i; j++){
str += i + " ";
}
console.log(str);
    str = "";
}

*/
//str1 = "";
//str = "";
//for(var i = 1; i <= 4; i++){
//    str1+="BWBWBWBW";
//document.write(str1);
//    document.write("<br/>");
//    str1 = "";
//  for(var j = 1; j <2; j++){
//      str+= "WBWBWBWB";
//    document.write(str);  
//      str = "";
//      document.write("<br/>");
//  }
//   
//}
//

//Q4:
/*
var str1 = "";
var str = "";
for(var i = 0; i< 4; i++){
    str1+="BWBWBWBW";
    for(var j = 0; j < 1; j++){
        str+= "WBWBWBWB";
    }
    console.log(str);
    str="";
    console.log(str1);
    str1 = "";
}

*/

//var str = "";
//var str1 = "";
//
//for(var i = 0; i < 5; i++){
//    str1 = "CDCDCDCDCD";
//    for (var j = 1; j < 2; j++){
//        str+="ABABABABAB";
//        
//    }
//    console.log(str);
//    str="";
//    console.log(str1);
//    str="";
//}



//var num = 6;
//var sum = 0;
//var number = parseInt(prompt("Enter any number"));
//for(var i = 0; i <= 10; i++){
//    sum = num * i;
//    console.log(num+"*"+i+" = "+sum);
//}






//for super nested loop

//var str = "";
//for(var i = 1; i <= 7; i++){
//    str ="";
//    for(var j = 1; j <= 7; j++){
//        str+=j + " ";
//        console.log(str);
//    }break;
//}
//for(var i = 1; i < 7; i++){
//    str ="";
//    for(var j = 1; j <= 7-i; j++){
//        str += j+" ";
//    }
//    console.log(str);
//}




//for(var i = 1; i <=7; i++){
//    var str = "";
//    for(var j = 1; j <= 8 -i; j++){
//        str+= j+ " ";
//    }
//    console.log(str);
//}
//
//for(var i = 2; i <=7; i++){
//    str = "";
//for(var j = 1; j <= i; j++){
//        str+=j+" ";
//    }
//    console.log(str);
//}







//Q3
//var str = "";
//for(var i = 1; i <= 7; i++){
//    str = "";
//    for(var j = 1; j < i; j++){
//        document.write("&nbsp&nbsp");
//    }
//    for(var j = i; j<= 7; j++){
//        str+= j+"&nbsp";
//    }
//    document.write(str);
//    document.write("<br/>");
//}
//  for(var i = 6; i >= 1; i--){
//      str = "";
//      for(var j = 1; j <i; j++){
//          document.write("&nbsp&nbsp");
//      }
//      for(var j = i; j <= 7; j++){
//          str+= j+"&nbsp";
//      }
//      document.write(str);
//      document.write("<br/>");
//  }


//
//var animals = ["goat", "cat","crow"];
//var products = ["milk","cheese", "burger"];
//var foodItems = [];
//var k = 0;
//
//for(var i = 0; i<animals.length; i++){
//    for(var j = 0; j < products.length; j++){
//        foodItems[k] = animals[i] + products[j];
//         console.log(foodItems[k]);
//        k++;
//       
//    }
//    
//}

//numbers+=" "+numbers;



//var newArray = Array(10);
//
//for(var i = 0; i < 2; i++){
//  var user = parseInt(prompt("Enter any number");
//
//console.log(newArray[i] = user);
//
//}
//
//for(var i = 0; i < newArray.length; i++){
//
//  var result = newArray[0] + newArray[1];
//
//  newArray[0] = result;
//
//}



//var str="";
//var array = [];
//for(var i = 1; i <= 1000; i++){
//    if(i + 9){
//    str+= i+" "+"\n";
//    array.push(str);
//    }
//}
//console.log(array);
str="";
for(var i = 1; i <= 7; i++){
    
    for(var j = 1; j <= i; j++){
        console.log(str+=1);
    }
    console.log("");
}










































































































