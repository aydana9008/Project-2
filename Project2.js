var vegetables = {
    cucumber: 2.5,
    tomatoes: 3,
    onion:1.5,
    pepper: 2,
    carrot: 4
};
var fruits = {
    orange: 3.5,
    banana: 4,
    waterMelon: 7,
    apple: 8,
    cherry: 4
};

 function printObj(object){
          var list="";
          for(var i in object){
              list+=i+" = $"+object[i]+"\n";
          }
          alert(list);     
 }



var total = 0;
OuterLoop:
while(true){
  var askUser = parseInt(prompt("What type of product do you want to buy? Enter \n1 - for vegetables \n 2 - for fruits"));
  if(askUser === 1){
      printObj(vegetables);
 
      selectionVegLoop:
      while(true){
          var i = 0;
          var select = "";
          for(var j in vegetables){
              i++;
              select+= "Enter "+i+" - for "+j+"\n";
          }
          var askSelection = parseInt(prompt(select));  
      
         // select#1
               if(askSelection===1){
                 askSelection = vegetables.cucumber;
                  vegAmountLoop:
                 while(true){
                     for(var item in vegetables){
                         if(vegetables[item] === askSelection){
                         var vegName = item;
                         }
                     }
                     var amount1 = parseInt(prompt("Enter the amount of "+vegName));
                     if (amount1 >0 && amount1 < 101){
                         total += askSelection * amount1; 
                         while(true){
                         var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for no"));
                         if(shopMore === 1){
                             continue OuterLoop;
                         }
                         else if(shopMore===2){
                             alert("Your grand total is $"+total+". Thank you!");
                             break OuterLoop;
                         }else{
                             alert("Please enter a valid option");
                             continue;
                         }
                     }
                 }
                     else{
                         alert("Please enter amount between 1 - 100");
                         continue vegAmountLoop;
                     }
             }
        }
          //select#2
           else if(askSelection===2){
                var askSelection = vegetables.tomatoes;
               vegAmountLoop:
                 while(true){
                       for(var item in vegetables){
                         if(vegetables[item] === askSelection){
                         var vegName = item;
                         }
                     }
                     var amount1 = parseInt(prompt("Enter the amount of "+vegName));
                     if(amount1>0 && amount1<101){
                         total += askSelection * amount1; 
                         while(true){
                         var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for no"));
                         if(shopMore === 1){
                             continue OuterLoop;
                         }
                         else if(shopMore===2){
                             alert("Your grand total is $"+total+". Thank you!");
                             break OuterLoop;
                         }else{
                             alert("Please enter a valid option");
                             continue;
                         
                         }
                     }
                 }
                     else{
                         alert("Please enter amount between 1 - 100");
                         continue vegAmountLoop;
                     }
             }
          }
          //select#3
                else if(askSelection===3){
                var askSelection = vegetables.onion;
                    vegAmountLoop:
                 while(true){
                       for(var item in vegetables){
                         if(vegetables[item] === askSelection){
                         var vegName = item;
                         }
                     }
                     var amount1 = parseInt(prompt("Enter the amount of "+vegName));
                     if(amount1>0 && amount1< 101){
                         total += askSelection * amount1; 
                         while(true){
                         var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for no"));
                         if(shopMore === 1){
                             continue OuterLoop;
                         }
                         else if(shopMore===2){
                             alert("Your grand total is $"+total+". Thank you!");
                             break OuterLoop;
                         }else{
                             alert("Please enter a valid option");
                             continue;
                         
                         }
                     }
                 }
                     else{
                         alert("Please enter amount between 1 - 100");
                         continue vegAmountLoop;
                     }
             }
          }
                   //select#4
                       else if(askSelection===4){
                var askSelection = vegetables.pepper;
                           vegAmountLoop:
                 while(true){
                       for(var item in vegetables){
                         if(vegetables[item] === askSelection){
                         var vegName = item;
                         }
                     }
                     var amount1 = parseInt(prompt("Enter the amount of "+vegName));
                     if(amount1>0 && amount1<101){
                         total += askSelection * amount1; 
                         while(true){
                         var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for no"));
                         if(shopMore === 1){
                             continue OuterLoop;
                         }
                         else if(shopMore===2){
                             alert("Your grand total is $"+total+". Thank you!");
                             break OuterLoop;
                         }else{
                             alert("Please enter a valid option");
                             continue;
                         
                         }
                     }
                 }
                     else{
                         alert("Please enter amount between 1 - 100");
                         continue vegAmountLoop;
                     }
             }
          }
          //select#5
                       else if(askSelection===5){
                var askSelection = vegetables.carrot;
                           vegAmountLoop:
                 while(true){
                       for(var item in vegetables){
                         if(vegetables[item] === askSelection){
                         var vegName = item;
                         }
                     }
                     var amount1 = parseInt(prompt("Enter the amount of "+vegName));
                    if(amount1 > 0 && amount1< 101){
                         total += askSelection * amount1; 
                         while(true){
                         var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for no"));
                         if(shopMore === 1){
                             continue OuterLoop;
                         }
                         else if(shopMore===2){
                             alert("Your grand total is $"+total+". Thank you!");
                             break OuterLoop;
                         }else{
                             alert("Please enter a valid option");
                             continue;
                         
                         }
                     }
                 }
                     else{
                         alert("please enter amount between 1 - 100");
                         continue vegAmountLoop;
                     }
             }
          }
          else{
              alert("Please enter a valid option");
              continue selectionVegLoop;
          }
      }
  }
    //fruits
    else if(askUser === 2){
        printObj(fruits);
        selectionFruitLoop:
      while(true){
          var i = 0;
          var select = "";
          for(var j in fruits){
              i++;
              select+= "Enter "+i+" - for "+j+"\n";
          }
          var askSelection = parseInt(prompt(select));
          //select#1
           if(askSelection===1){
              askSelection = fruits.orange;
               fruitAmountLoop:
              while(true){
                    for(var item in fruits){
                         if(fruits[item] === askSelection){
                         var fruitName = item;
                         }
                     }
                  var amount = parseInt(prompt("Enter the amount of "+fruitName));
                  if(amount>0 && amount < 101){
                      total += askSelection * amount;
                      while(true){
                          var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for now"));
                          if(shopMore===1){
                              continue OuterLoop;
                          }else if(shopMore===2){
                              alert("Your grand total is: $"+total+". Thank you!");
                              break OuterLoop;
                          }
                          else{
                              alert("Please enter a valid option");
                              continue;
                          }
                      }
                  }
                  else{
                      alert("Please enter amount between 1-100");
                      continue fruitAmountLoop;
                  }
              }
          }
          //select#2
               else if(askSelection===2){
              askSelection = fruits.banana;
             fruitAmountLoop:
              while(true){
                   for(var item in fruits){
                         if(fruits[item] === askSelection){
                         var fruitName = item;
                         }
                     }
                  var amount = parseInt(prompt("Enter the amount of "+fruitName));
                  if(amount>0 && amount< 101){
                      total += askSelection * amount;
                      while(true){
                          var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for now"));
                          if(shopMore===1){
                              continue OuterLoop;
                          }else if(shopMore===2){
                              alert("Your grand total is: $"+total+". Thank you!");
                              break OuterLoop;
                          }
                          else{
                              alert("Please enter a valid option");
                              continue;
                          }
                      }
                  }
                  else{
                      alert("Please enter amount between 1 - 100");
                      continue fruitAmountLoop;
                  }
              }
        }
          //select#3
               else if(askSelection===3){
              askSelection = fruits.waterMelon;
             fruitAmountLoop:
              while(true){
                   for(var item in fruits){
                         if(fruits[item] === askSelection){
                         var fruitName = item;
                         }
                     }
                  var amount = parseInt(prompt("Enter the amount of "+fruitName));
                  if(amount>0 && amount <= 100){
                      total += askSelection * amount;
                      while(true){
                          var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for now"));
                          if(shopMore===1){
                              continue OuterLoop;
                          }else if(shopMore===2){
                              alert("Your grand total is: $"+total+". Thank you!");
                              break OuterLoop;
                          }
                          else{
                              alert("Please enter a valid option");
                              continue;
                          }
                      }
                  }
                  else{
                      alert("Please enter amount between 1 - 100");
                      continue fruitAmountLoop;
                  }
              }
          }
          //select#4
               else if(askSelection===4){
              askSelection = fruits.apple;
                   fruitAmountLoop:
              while(true){
                   for(var item in fruits){
                         if(fruits[item] === askSelection){
                         var fruitName = item;
                         }
                     }
                  var amount = parseInt(prompt("Enter the amount of "+fruitName));
                  if(amount>0 && amount<101){
                      total += askSelection * amount;
                      while(true){
                          var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for now"));
                          if(shopMore===1){
                              continue OuterLoop;
                          }else if(shopMore===2){
                              alert("Your grand total is: $"+total+". Thank you!");
                              break OuterLoop;
                          }
                          else{
                              alert("Please enter a valid option");
                              continue;
                          }
                      }
                  }
                  else{
                      alert("Please enter amount between 1 - 100");
                      continue fruitAmountLoop;
                  }
              }
          }
          //select#5
               else if(askSelection===5){
              askSelection = fruits.cherry;
                   fruitAmountLoop:
              while(true){
                   for(var item in fruits){
                         if(fruits[item] === askSelection){
                         var fruitName = item;
                         }
                     }
                  var amount = parseInt(prompt("Enter the amount of "+fruitName));
                  if(amount> 0 && amount< 101){
                      total += askSelection * amount;
                      while(true){
                          var shopMore = parseInt(prompt("Your total is: $"+total+". Would you like to shop more? 1 - for yes, 2 - for now"));
                          if(shopMore===1){
                              continue OuterLoop;
                          }else if(shopMore===2){
                              alert("Your grand total is: $"+total+". Thank you!");
                              break OuterLoop;
                          }
                          else{
                              alert("Please enter a valid option");
                              continue;
                          }
                      }
                  }
                  else{
                      alert("Please enter amount between 1 - 100");
                      continue fruitAmountLoop;
                  }
              }
          }
          else{
              alert("Please enter a valid option");
              continue selectionFruitLoop;
          }
    }
}
    else{
        alert("Please enter a valid option");
        continue;
    }
}

   