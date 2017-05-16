
// Creating questionss and answers
//*****************************************************************************
var question1 = {
  question: "What does HTML stand for?",
  answers: ["Hyper Text Markup Language", "HyperLinks and Text Markup Language", "Home Tool Markup Language"],
  correct: 0
};

var question2 = {
  question: "How can you make a numbered list?",
  answers: ["<u>", "<list>", "<dl>","<ol>"],
  correct: 3
};

// Create Question
//------------------------------------------------------------------
document.getElementById('question').innerHTML = question1.question;
console.log(question1.question);


var ulTag = document.getElementsByTagName('ul');
var liTags;

var liTagsid = [];

// Display Answers
//------------------------------------------------------------------
for (var i = 0; i < question1.answers.length; i++) {
  // creating answers
  var newAns = document.createElement('li');
  newAns.id = 'ans'+ (i+1);
  liTagsid.push(newAns.id);
  var textAns = document.createTextNode(question1.answers[i]);
  newAns.appendChild(textAns);
  var addNewAnsHere = document.getElementById('answer');
  addNewAnsHere.appendChild(newAns);

  console.log(question1.answers[i]);
}

var liTags = ulTag[0].getElementsByTagName('li');


for (var i = 0; i < liTags.length; i++) {
  // console.log(liTags[i]);
  console.log(i);
    liTags[i].onclick = function(){ selected()};
}


function selected(){
  if (liTags[0].className !== "selected"){
    liTags[0].className = "selected";
  } else {
    liTags[0].className = "";
  }
}




// Show Correct Answer
//------------------------------------------------------------------
document.getElementById('submit').onclick = function (){ commentingApp()};


function commentingApp (){
/*
  // Create list and give a class name
  var newList = document.createElement('li');
  newList.className = 'media';
  newList.id = 'list'+index;
  var addNewListHere = document.getElementById('results');
  addNewListHere.appendChild(newList);

  // Create divs, give an id, class name, and add it to the unordered list
  var imageDiv = document.createElement('div');
  var commentDiv = document.createElement('div');
  imageDiv.id = 'image' + index;
  commentDiv.id = 'comment' + index;
  imageDiv.className = 'media-left';
  commentDiv.className = 'media-body';
  var addImageDivHere = document.getElementById('list'+index);
  var addCommentDivHere = document.getElementById('list'+index);
  addImageDivHere.appendChild(imageDiv);
  addCommentDivHere.appendChild(commentDiv);

  //create an image, provide a source and add it to the unordered list
  var newImage = document.createElement('img');
  newImage.className = 'media-object';
  newImage.src = userImage;
  var addImageHere = document.getElementById('image'+ index);
  addImageHere.appendChild(newImage);

  // Create Text nodes to place comments
  var newCommentText = document.createTextNode(userComment);
  var newDate = new Date();
  var date = month[newDate.getMonth()] + " "+ newDate.getDate()+ ", "+newDate.getFullYear();
  var newUserText = document.createTextNode( userName + "  |  " + date + "  ·  "+ getTimeAMPM(newDate) );

  // create paragraph and add text to it
  var addComment = document.createElement('p');
  addComment.className = 'userText1';
  addComment.appendChild(newCommentText);

  var addUserName = document.createElement('span');
  addUserName.className = 'userText2';
  addUserName.appendChild(newUserText);

  //add items to list
  commentDiv.appendChild(addComment);
  commentDiv.appendChild(addUserName);

  //create a button
  var newButton = document.createElement('button');
  newButton.className = 'delete-button';
  newButton.id = 'button'+index;
  var newButtonText = document.createTextNode('delete');
  newButton.appendChild(newButtonText);
  commentDiv.appendChild(newButton);

  //changing background color of even lists
  if (changeColor%2 === 0 )
  {
    commentDiv.className = 'media-body color1';
  } else {
    commentDiv.className = 'media-body color2';
  }

  //clear values of input and text
  document.getElementById('name').value = "";
  document.getElementById('comment').value = "";

  //delete on click of the delete button
  document.getElementById(newButton.id).onclick = function(){deleteComment(newList.id)};
  console.log(document.getElementById(newButton.id).onclick );

  //Add increments
  changeColor++;
  index++;
  count++; */

  return
}
