
// Creating questionss and answers
//*****************************************************************************
var question1 = {
                  question: "What does HTML stand for?",
                  answers: ["Hyper Text Markup Language", "HyperLinks and Text Markup Language", "Home Tool Markup Language"],
                  correct: 0
                };

var question2 = {
                  question: "The Bootstrap grid system is based on how many columns?",
                  answers: ['6', '9', '12', '3'],
                  correct: 2
                };

var question3 = {
                  question: 'What does CSS stand for?',
                  answers: ['Colorful Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'],
                  correct: 1
                }

var question4 = {
                  question: "Which property is used to change the background color?",
                  answers: ["bgcolor", "color", "background-color"],
                  correct: 2
                };

var question5 = {
                  question: "Javasctipt is the same as Java?",
                  answers: ["True", "False"],
                  correct: 1
                };

var question6 = {
                  question: "Which event occurs when the user clicks on an HTML element?",
                  answers: ["onchange", "onmouseclick", "onmouseover","onclick"],
                  correct: 3
                };

var question7 = {
                  question: "Is JavaScript case-sensitive?",
                  answers: ["True", "False"],
                  correct: 0
                };

// , question3, question4, question5, question6, question7

var questions = [question1, question2];

// Create Question
//------------------------------------------------------------------


var tags;
var tagsClass = '';
var liTagsid = [];
var correctAns = 0;
var quizPage = 1;


var currentIndex = 0;
var currentQuestion = questions[currentIndex];

var prevousQuestion;
var previousIndex = 0;

var ulTag = document.getElementsByTagName('ul')[0];

var button = document.getElementById('submit');

var questionTitle = document.getElementById('question');


  //save class name so it can be reused easily
  //if I want to change it, I have to change it one place
  var classHighlight = 'selected';


// Display Answers and hightlight selected item
//------------------------------------------------------------------
function showQuestions (){

  if (currentIndex != 0) {
    // create again submit button only for next pages
    ulTag.innerHTML ='';
    button.innerHTML = 'Submit';
    button.className = 'submit';
    button.id = 'submit';

    //update the number of questions displayed
    document.getElementById('quizNumber').innerHTML = quizPage;
  }

  if (currentIndex ==  (questions.length)) {
    ulTag.innerHTML = '';
    document.getElementById('question').innerHTML = '';
    button.innerHTML = 'Restart';
    button.className = 'restart';
    button.id = 'restart';

    showResults();

    return
  }

  questionTitle.innerHTML = currentQuestion.question;
  console.log(currentQuestion.question);

  // create a for loop to generate the answers and display them in the page
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    // creating answers
    var newAns = document.createElement('li');
    newAns.id = 'ans'+ (i+1);
    newAns.className = "notSelected";
    var textAns = document.createTextNode(currentQuestion.answers[i]);
    newAns.appendChild(textAns);
    var addNewAnsHere = document.getElementById('answer');
    addNewAnsHere.appendChild(newAns);

    console.log(currentQuestion.answers[i]);
  }


  //.click() will return the result of $('.notSelected')
    var $liTags = $('.notSelected').click(function(list) {
        list.preventDefault();
        //run removeClass on every element
        //if the elements are not static, you might want to rerun $('.notSelected')
        //instead of the saved $litTags
        $liTags.removeClass(classHighlight);
        //add the class to the currently clicked element (this)
        $(this).addClass(classHighlight);

        //get id name of clicked answer
        for (var i = 0; i < currentQuestion.answers.length ; i++) {
          // console.log(liTagsid[i]);
          if($liTags[i].className == "notSelected selected"){
            //store information to check answer
            tags = $liTags[i].id;
            // tagsClass = $LiTags.className;
            console.log(tags);
            tagsClassName = $liTags[i];
          }
        }
    });

    //check answer once it has been submitted
    button.onclick = function (){ checkAnswer()};
}

//self calling function
showQuestions();


// Show Correct Answer
//------------------------------------------------------------------
function checkAnswer (){
  // get selected list
  var selectedItem = document.getElementById(tags);

  // check that an answer has been selected
  if (selectedItem == undefined) {
    alert("Please selected an answer!")
    return
  } else {
    // get user answer if form of text
    var userAns = selectedItem.innerHTML;
  }

  // change the background of the answer according to the Results
  if (userAns == currentQuestion.answers[currentQuestion.correct]) {
    console.log("Correct! The answer is: "+ userAns);
    // change color of selected item by changing className
    selectedItem.className = 'correct';
    // count the number of correct answers
    correctAns++;
    console.log(correctAns);
  } else {
    console.log("Wrong! The corrent answer is: "+  currentQuestion.answers[currentQuestion.correct]);
    //change the background of the wrong answer
    selectedItem.className = 'wrong';
    //hightlight the right answer if the user got it wrong
    //change the class name of the correct answer
    ulTag.getElementsByTagName('li')[currentQuestion.correct].className = 'correct';

    console.log(currentQuestion.answers[currentQuestion.correct]);
  }

  // Create a next Question button once the answer has been submitted
  button.innerHTML = 'Next Question';
  button.className = 'next';
  button.id = 'next';

  prevousQuestion = currentQuestion;
  quizPage++;
  currentIndex++;
  currentQuestion = questions[currentIndex];

  // Start with the next question once the "Next" button has been clicked
  button.onclick = function (){showQuestions()};
  return
}

// Final score
//------------------------------------------------------------------
function showResults () {
  questionTitle.innerHTML = '<h1>Your Score</h1>';
  var newInfo = document.getElementById('quiz-results');
  newInfo.innerHTML = '';
  newInfo.id = 'circle';

  document.getElementById('pages').innerHTML = ''

  var newScore = document.createElement('p');
  var textScore = document.createTextNode(Math.floor((correctAns/questions.length)*100) + '%');
  newScore.appendChild(textScore);

  var addHere = document.getElementById('circle');
  addHere.appendChild(newScore);


}



//
