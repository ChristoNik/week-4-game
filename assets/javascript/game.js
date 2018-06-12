// computer randomly selects a number between 19-120 for player to match using the formula:
// function getRandomInt(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }

var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// show this number under #numberToGuess
$("#numberToGuess").html(randomNumber);

// computer randomly selects a number between 1-12 for each gem (yeah I know (-1) +1 = 0 :)
var blueGem = Math.floor(Math.random() * (12 - 1 + 1 )) +1;
var greenGem = Math.floor(Math.random() * (12 - 1 + 1 )) +1;
var redGem = Math.floor(Math.random() * (12 - 1 + 1 )) +1;
var yellowGem = Math.floor(Math.random() * (12 - 1 + 1 )) +1;

// here we set all variables to 0
var userTotal = 0;
var wins = 0;
var losses = 0;
$("#totalNumber").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);

//reset all variables once game is won/lost
var reset = function() {
    userTotal = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    blueGem = Math.floor(Math.random() * (12 - 1 + 1 )) +1;
    greenGem = Math.floor(Math.random() * (12 - 1 + 1 )) +1;
    redGem = Math.floor(Math.random() * (12 - 1 + 1 )) +1;
    yellowGem = Math.floor(Math.random() * (12 - 1 + 1 )) +1;
    console.log(randomNumber);
    $("#numberToGuess").html(randomNumber);
    $("#totalNumber").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
};

// if else statement for winning or losing.
// if total equals the random Number - it is a Win.
// if total is higher than the random - it is a loss
var winsCheked = function() {
    if (userTotal == randomNumber) {
        wins++;
        alert("You WON! Lets Play Again Winner!");
        $("#wins").html(wins);
        reset();

    } else if (userTotal > randomNumber) {
        losses++;
        alert("You Did NOT win! Lets Play Again Loser!");
        $("#losses").html(losses);
        reset();
    }
};

// computer "listening for .on("click") events and, if gem is clicked the number is added to previous clicks
// blueGem and redGem are set to return value for .on("mouseover") event just as experiment Yey! It works!
$("#blue").on("mouseover", function() {
    userTotal = userTotal + blueGem;
    $("#totalNumber").html(userTotal);
    winsCheked();
});

$("#green").on("click", function() {
    userTotal = userTotal + greenGem;
    $("#totalNumber").html(userTotal);
    winsCheked();
});

$("#red").on("mouseover", function() {
    userTotal = userTotal + redGem;
    $("#totalNumber").html(userTotal);
    winsCheked();
});

$("#yellow").on("click", function() {
    userTotal = userTotal + yellowGem;
    $("#totalNumber").html(userTotal);
    winsCheked();
});
