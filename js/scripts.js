//jslint: esversion:6

//array of the Elder Futhark rune names
var runes = ["Fehu", "Uruz", "Thurisaz", "Ansuz", "Raidho", "Kaunan", "Gebo", "Wunjo", "Hagalaz", "Naudhiz", "Isaz", "Jera", "Eihwaz", "Perdhro", "Elhaz", "Sowulo", "Teiwaz", "Berkana", "Ehwaz", "Mannaz", "Laguz", "Inguz", "Dagaz", "Othala"];

// var getRandomInt = function(min,max) {
//   return Math.floor(Math.random() * (max-min) + min);
// };

var runeNumber;

var getRandomInteger = function() {
  runeNumber = Math.floor(Math.random() * 23);
};

var birthday;
var season;
var number;
var astrologicalSign;

//How to calculate astrological sun sign based on birthday???

//User Interface Logic
$(document).ready(function() {
  $("form#rune-survey").submit(function(event) {
    event.preventDefault();
    $("form#rune-survey").hide();
    //Run the calculations here and come up with a rune to display
    birthday = $("#birthday").val();
    season = $("#season").val();
    number = $("#number").val();

    $("#results-div").show();
    var runeToDisplay = runes[runeNumber];
    $("p#rune").append(runeToDisplay);
    // $("p#results-summary").append(`Your birthday is ${birthday}, your favorite season is ${season} and you chose the number ${number}.`);






  });
});






//When to use let vs var???
