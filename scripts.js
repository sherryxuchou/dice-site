function generateRandomPicture(imageArray, diceArray){
    for (ind in diceArray) {
        var die = diceArray[ind];
        var randomNum = Math.floor(Math.random() * imageArray.length);
	    die.setAttribute("src", imageArray[randomNum]);
        var randomX = Math.floor(Math.random() * box_range_x) + box_min_x;
        var randomY = Math.floor(Math.random() * box_range_y) + box_min_y;
        die.style.left = (randomX - ind * 150) + "px"
        die.style.top = (randomY - 800) + "px"
        die.style.height = "8vw";
    }
    document.getElementById("sentences").innerText = ""
	// let randomNum = Math.floor(Math.random() * imageArray.length); 
	// image.setAttribute("src", imageArray[randomNum]);
    // let randomX = Math.floor(Math.random() * box_range_x) + box_min_x;
    // let randomY = Math.floor(Math.random() * box_range_y) + box_min_y;
    // image.style.left = randomX + "px"
    // image.style.top = (randomY - 800) + "px"
    // image.style.top=y;
}

const imageArray = [
	"images/dice/dice-1.png",
	"images/dice/dice-2.png",
	"images/dice/dice-3.png",
	"images/dice/dice-4.png",
	"images/dice/dice-5.png",
	"images/dice/dice-6.png",
	"images/dice/dice-7.png",
	"images/dice/dice-8.png",
	"images/dice/dice-9.png",
	"images/dice/dice-10.png",
	"images/dice/dice-11.png",
	"images/dice/dice-12.png",
	"images/dice/dice-13.png",
	"images/dice/dice-14.png",
	"images/dice/dice-15.png",
	"images/dice/dice-16.png",
    "images/dice/dice-17.png",
    "images/dice/dice-18.png",
    "images/dice/dice-19.png",
    "images/dice/dice-20.png",
    "images/dice/dice-21.png",
    "images/dice/dice-22.png",
    "images/dice/dice-23.png",
    "images/dice/dice-24.png",
    "images/dice/dice-25.png",
    "images/dice/dice-26.png",
    "images/dice/dice-27.png",
    "images/dice/dice-28.png",
    "images/dice/dice-29.png",
    "images/dice/dice-30.png",
    "images/dice/dice-31.png",
    "images/dice/dice-32.png",
    "images/dice/dice-33.png",
    "images/dice/dice-34.png",
    "images/dice/dice-35.png",
    "images/dice/dice-36.png",
    "images/dice/dice-37.png",
    "images/dice/dice-38.png",
    "images/dice/dice-39.png",
    "images/dice/dice-40.png"
];

const diceImages = [
    document.querySelector(".dice-image-1"),
    document.querySelector(".dice-image-2"),
    document.querySelector(".dice-image-3"),
    document.querySelector(".dice-image-4"),
    document.querySelector(".dice-image-5"),
    document.querySelector(".dice-image-6")
];

const button = document.querySelector(".tray-img");
const outcomeButton = document.querySelector(".refreshOutcome");
let box_min_x = 350;
let box_min_y = 700;
let box_max_x = 610;
let box_max_y = 1250;

let box_range_x = box_max_x - box_min_x;
let box_range_y = box_max_y - box_min_y;

window.onload = () => generateRandomPicture(imageArray, diceImages);

button.addEventListener("click", () => generateRandomPicture(imageArray, diceImages));
outcomeButton.addEventListener("click", () => spawnOutcome());

function displayText() {
  var text = document.getElementById("textField");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
  }
}

function getRandomSentence () {
    var index= Math.floor(Math.random() * (sentences.length));
    return sentences[index];
}

var sentences= [
    'you got sat on by a mountain troll',
    'you got beat up by a goat',
    'you fell to the bottom of a well and drowned',
    'you tried to summon a powerful creature but summoned a rock instead',
    'you become possessed by an evil spirit',
    'you slipped getting out of the tub, faceplanted, and died',
    'a cat scratched your entire face off',
    'the potion you were making exploded in your face',
    'you were killed by 10 frightened cows',
    'the townspeople burnt you at the stake',
    'you tripped over a root and drowned in a puddle',
    'you fell down a hole and encountered a minotaur',
    'you tried to tame a dragon. it didn\u0027t work',
    'goblins clobbered you in the head with a mallet',
    'you just flat out forgot a healer',
    'you got gored by a bat',
    'you tried to get friendly with an owlbear',
    'you tripped into a barrel and rolled off a cliff',
    'you got viciously attacked by a ladybug',
    'death by boiling soup',
    'you got turned into a slime blob',
    'your sword slipped through your fingers and you stabbed yourself',
    'you got trampled by a giant frog',
    'a troll threw a boulder at your head. you didn\u0027t dodge in time',
    'you don\u0027t actually know how to play this game',
    'you had a nice drink at the tavern. too bad it was poisoned',
    'zombies. that\u0027s it',
    'you were dunked into a pot of boiling oil by an enraged bugbear',
    'you got tossed off a castle parapet by an angry princess',
    'you drank the wrong potion and turned into an orc',
    'you got punched off an airship',
    'you tried swimming...in full armor',
    'you fell into a pit trap and got eaten by rats',
];

function spawnOutcome() {
    var outcome = document.getElementById("sentences")
    outcome.innerText = getRandomSentence();
    var mainDie = diceImages[0];
    var randomNum = Math.floor(Math.random() * imageArray.length);
    mainDie.setAttribute("src", imageArray[randomNum]);
    mainDie.style.left = box_min_x + "px";
    mainDie.style.top = -200 + "px";
    mainDie.style.height = "20vw";

    for (var i = 1; i < diceImages.length; i++) {
        var dieGone = diceImages[i];
	    dieGone.setAttribute("src", "");
    }
}