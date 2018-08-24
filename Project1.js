//function Question(question, answerArray, correctAnswer){
//    this.question = question;
//    console.log(question);
//    this.answerArray = answerArray;
//    console.log(answerArray);
//    this.correctAnswer = correctAnswer;
//    this.userAnswer = function(){
//        var askUser = parseInt(prompt("Enter your answer"));
//        if(askUser === this.correctAnswer){
//            console.log("Congratulations! You are right!");
//        }
//        else{
//            console.log("Ouch... Try again!");
//        }
//        }
//    }




//!!!


function Question(question, answerArray, correctAnswer){
    this.question = question;
    this.answerArray = answerArray;
    this.correctAnswer = correctAnswer;
    
    this.printQuestion = function(){
       var num = Math.random()*(2-0)+0;
       var num = Math.round(num);
        if(num === 0){
            console.log(array[num][num]+"\n"+array[num][1]);
        }
        else if(num === 1){
            console.log(array[num][0]+"\n"+array[num][num]);
        }
        else{
            console.log(array[num][0]+"\n"+array[num][1]);
        }
        
          this.userAnswer = function(){
       
          var askUser = parseInt(prompt("Enter your answer"));
        if(askUser === array[num][2]) {
            console.log("Congratulations! You are right!");
        }
        else{
            console.log("Ouch... Try again!");
        }
    }
    }
}


var question1 = new Question("What is the meaning of 'sono'?", ["1. time", "\n2. movement", "\n3. sound"].toString(), 3);
var question2 = new Question("What is exploratory testing?", ["1. Ad-Hoc", "\n2. All of the answers", "\n3. Monkey", "\n4. Godzilla"].toString(), 2);
var question3 = new Question("What is the keyword to delete a property from Object?", ["1. del", "\n2. remove", "\n3. delete", "\n4. none of the above"].toString(), 3);

 
  var array = [[question1.question, question1.answerArray, question1.correctAnswer], [question2.question, question2.answerArray, question2.correctAnswer], [question3.question, question3.answerArray, question3.correctAnswer]];
question2.printQuestion();
question2.userAnswer();








