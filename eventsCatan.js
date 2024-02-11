document.getElementById('rollBothButton').addEventListener('click', function() {

    displaySecondResult(rollDice(), rollSecondDice())
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollSecondDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function displaySecondResult(result, resultTwo) {
    var imageSrc = result + "-" + "Di" + ".png";
    var imageSrcSecond = resultTwo + "-" + "Di" + ".png";

    document.getElementById('diceImage').src = imageSrc;
    document.getElementById('diceImageTwo').src = imageSrcSecond;
    document.getElementById('result').innerText = 'You rolled a ' + result + ", and a " + resultTwo;
}