
$(document).ready(function() {
  // This is our starting wordList array.
  var wordList = ["random", "computer", "oranges", "snow", "document", "sidewalk", "horse"];
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
    totalGuesses = 5;
    guessesLeft = 5;
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


  // if matched letters = letters of the word, wins++ and restart game
  // function updateWins(){
  //   if((letter === lettersofTheWord[i]) && (matchedLetters.indexOf(letter) !== -1)){
  //     wins++;
  //     console.log(wins);
  //     restartGame();
  //   }
  //   else {
  //     updatePage(letter)
  //   }
  // }



function restartGame() {

  randomWord = null;
  lettersofTheWord =[];
  matchedLetters = [];
  guessedLetters = [];
  letterGuessed = [];
  totalGuesses = 0;
  letter = null;
  guessesLeft = 0;

  start();

}


  
var randomArray = [];
 
  start();
  document.onkeyup = function(event) {
    if(event.keyCode >=49 && event.keyCode <= 90){
      letterGuessed = event.key.toLowerCase();
      console.log(letterGuessed)
      updatePage(letterGuessed);
    }
    for(var i=0; i<lettersofTheWord.length;i++){
      if (matchedLetters[i] === lettersofTheWord[i]){
        randomArray.push(lettersofTheWord[i])
        console.log(matchedLetters.length)

      }

        

        // if (matchedLetters === lettersofTheWord) {
        //   wins++;
        //   console.log(wins);
        //   }
        // else {
        //   console.log("you did not win");
        //   console.log(matchedLetters);
        // }

      }

      if(lettersofTheWord.length == matchedLetters.length) {
        console.log("you win!");
        wins++;
        console.log(wins);
        document.querySelector("#wins").innerHTML = wins;
        restartGame();
      }
  
    }
    


});





// if((letter === lettersofTheWord[i]) && (matchedLetters.indexOf(letter) !== -1)){
//   ));
