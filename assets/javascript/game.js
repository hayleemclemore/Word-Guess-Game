
var maxGuesses = 13;
var wins = 0;
var letters = /^[A-Za-z]+$/;
var letterGuessed = "";
var wordGuessed = "";



$(document).ready(function() {


     // This is our starting myFarm array.
        var wordList = ["madonna", "computer", "oranges", "snow", "pizza", "sidewalk", "horse"];

     // Creating a variable to hold our array length.
        var wordListLength = wordList.length;

     // Looping through our myFarm array.
     for (var i = 0; i < wordListLength; i++) {

       // Console out the farm animal in the current index.
       console.log(wordListLength[i]);
       var newStr = Array(wordList[i].length).join(' __')

       // If the first character in the current animal is "c" or "o", alert the following message.
    //    if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o") {
    //      alert("Starts with a c or an o!");
    //    }

     }

    // for (var i = 0; i < wordList[i].length; i++){
     

    
    // };

    //Adding spaces for the current Word to game card 
    var spaces = document.getElementById("currentWord");
    var text = document.createTextNode(newStr);
    spaces.appendChild(text);

    //Displaying number of wins



    var userText = document.getElementById("user-text");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        userText.textContent = event.key;
      };

    var lettersGuessed = document.getElementById("lettersGuessed");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        lettersGuessed.textContent = event.key;
      };


      updateInformation ()


      function updateInformation () {

        var lettersGuessed = document.getElementById("lettersGuessed");

      }
});





