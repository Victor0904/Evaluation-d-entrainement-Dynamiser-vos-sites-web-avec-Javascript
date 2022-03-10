// Player name
var sPlayer1 = "Joueur 1";
var sPlayer2 = "Joueur 2";

// player score
var nScore1 =0;
var nScore2 =0;


// nombre de partie joué 
var nNbGame =0;



// Function to change the player name
function editNames() {
    sPlayer1 = prompt("Change Player1 name");
    sPlayer2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = sPlayer1;

    document.querySelector("p.Player2").innerHTML = sPlayer2;
}




// Function to roll the dice
function fnRollTheDice() {
    var nNumberPlayer1 = Math.floor(Math.random() * 6) + 1;
    var nNumberPlayer2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src",
        "dice" + nNumberPlayer1 + ".png");

    document.querySelector(".img2").setAttribute("src",
        "dice" + nNumberPlayer2 + ".png");

    if (nNumberPlayer1 === nNumberPlayer2) {
        document.querySelector("h1").innerHTML = "Egalité!";
    }
    else if (nNumberPlayer1 < nNumberPlayer2) {
        document.querySelector("h1").innerHTML = (sPlayer2 + " gagne!");
        nScore2 += 1;
    }
    else {
        document.querySelector("h1").innerHTML = (sPlayer1 + " gagne!");
        nScore1 += 1;
    }
    nNbGame += 1;
    
    score1.innerText = nScore1;
    score2.innerText = nScore2;


    document.getElementById("nbgame").innerText = nNbGame;

    img1.setAttribute("class", "img1");
    img2.setAttribute("class", "img2");
};

// Function to roll the dice
function rollTheDice() {
    img1.setAttribute("class", "img1 shake1");
    img2.setAttribute("class", "img2 shake2");  
    setTimeout(fnRollTheDice, 1500)
};


// function score

