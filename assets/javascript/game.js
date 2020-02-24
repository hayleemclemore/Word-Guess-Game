
// var maxGuesses = 13;
// var wins = 0;
// var letters = /^[A-Za-z]+$/;
// var letterGuessed = "";
// var wordGuessed = "";



$(document).ready(function() {
  // This is our starting myFarm array.
  var wordList = ["madonna", "computer", "oranges", "snow", "pizza", "sidewalk", "horse"];
  var randomWord = null;
  var lettersofTheWord =[];
  var matchedLetters = [];
  var guessedLetters = [];
  var wins = 0;
  var totalGuesses = 0;
  var letterGuessed = null;
  var guessesLeft = 0;

  function start(){
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord)
    lettersofTheWord = randomWord.split("");
    buildWord();
    handleGuess();
  }
  function buildWord(){
    var view = "";
    for(var i=0; i<lettersofTheWord.length;i++){
      if(matchedLetters.indexOf(lettersofTheWord[i]) !== -1){
        view += lettersofTheWord[i];
      }
      else{
        view += "&nbsp;_&nbsp";
      }
    }
    document.querySelector("#currentWord").innerHTML = view;
  }
  function handleGuess(){
    totalGuesses = 13;
    guessesLeft = 13;
    document.querySelector("#guessRemaining").innerHTML = guessesLeft;
  }
  function updatePage(letter){
    if(guessesLeft === 0){
      restartGame();
    }
    else{
      updateGuesses(letter);
      updateMatchedLetters(letter)
      buildWord()
    }
  }
  function updateGuesses(letter){
    if((guessedLetters.indexOf(letter) === -1) && (lettersofTheWord.indexOf(letter) === -1)){
      guessedLetters.push(letter);
      guessesLeft--;
      document.querySelector("#guessRemaining").innerHTML = guessesLeft;
      document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");
    }
  }
  function updateMatchedLetters(letter){
    for(var i=0; i<lettersofTheWord.length; i++){
      if((letter === lettersofTheWord[i]) && (matchedLetters.indexOf(letter) === -1)){
        matchedLetters.push(letter);
      }
    }
  }





  start();
  document.onkeyup = function(event) {
    if(event.keyCode >=49 && event.keyCode <= 90){
      letterGuessed = event.key.toLowerCase();
      console.log(letterGuessed)
      updatePage(letterGuessed);

    }
   
  };



    // for (var i = 0; i < wordList[i].length; i++){
     

    
    // };

    //Adding spaces for the current Word to game card 
    // var spaces = document.getElementById("currentWord");
    // var text = document.createTextNode(newStr);
    // spaces.appendChild(text);

    // //Displaying number of wins



    // var userText = document.getElementById("user-text");

    //   // Next, we give JavaScript a function to execute when onkeyup event fires.
      

    // var lettersGuessed = document.getElementById("lettersGuessed");

    //   // Next, we give JavaScript a function to execute when onkeyup event fires.
    //   document.onkeyup = function(event) {
    //     lettersGuessed.textContent = event.key;
    //   };


    //   updateInformation ()


    //   function updateInformation () {

    //     var lettersGuessed = document.getElementById("lettersGuessed");

    //   }
});





