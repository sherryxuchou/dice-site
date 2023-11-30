function generateRandomPicture(imageArray, diceArray) {
    for (ind in diceArray) {
        var die = diceArray[ind];
        var randomNum = Math.floor(Math.random() * imageArray.length);
        die.setAttribute("src", imageArray[randomNum]);
        var randomX = Math.floor(Math.random() * box_range_x) + box_min_x;
        var randomY = Math.floor(Math.random() * box_range_y) + box_min_y;
        die.style.left = (randomX - ind * 16) + "vh"
        die.style.top = (randomY - 150) + "vh"
        die.style.height = "16vh";
    }
    outcome.innerText = "";
    outcomeButton.style.top = "-110vh";
    menuButtons.style.top = "-45vh";

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
const outcomeButton = document.querySelector(".diceroll");
const printButton = document.querySelector(".printImg");
const outcome = document.getElementById("sentences")
const text = document.getElementById("textField");
const menuButtons = document.querySelector(".buttons");
const titleButton = document.querySelector(".titleImg");
let box_min_x = 40;
let box_min_y = 130;
let box_max_x = 65;
let box_max_y = 190;

let box_range_x = box_max_x - box_min_x;
let box_range_y = box_max_y - box_min_y;

window.onload = () => generateRandomPicture(imageArray, diceImages);

button.addEventListener("click", () => generateRandomPicture(imageArray, diceImages));
outcomeButton.addEventListener("click", () => spawnOutcome());
printButton.addEventListener("click", () => printPage());
titleButton.addEventListener("click", () => displayText());


function displayText() {
    if (text.style.display === "none") {
        generateRandomPicture(imageArray, diceImages);
        text.style.display = "block";
        var amount = 100 * (text.offsetHeight / window.innerHeight);
        moveEverything(-1 * amount);
        titleButton.setAttribute("src","images/title-2.png")
    } else {
        var amount = 100 * (text.offsetHeight / window.innerHeight);
        text.style.display = "none";
        moveEverything(amount);
        titleButton.setAttribute("src","images/title.png")
    }
}

function getRandomSentence() {
    var index = Math.floor(Math.random() * (sentences.length));
    return sentences[index];
}

var sentences = [
    'you got sat on by a mountain troll',
    'you got beat up by a goat',
    'you fell to the bottom of a well and drowned',
    'you tried to summon a powerful creature but got a rock instead',
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
    'your sword slipped and you stabbed yourself',
    'you got trampled by a giant frog',
    'a troll threw a boulder at your head',
    'you don\u0027t actually know how to play this game',
    'you had a nice drink at the tavern. too bad it was poisoned',
    'zombies. that\u0027s it',
    'you were dunked into a pot of boiling oil by an enraged bugbear',
    'you got tossed off a castle parapet by an angry princess',
    'you drank the wrong potion and turned into an orc',
    'you got punched off an airship',
    'you tried swimming...in full armor',
    'you fell into a pit trap and got eaten by rats',
    'you got jumped by a bunny',
    'you were suffocated by a feather pillow',
    'you were smothered by enchanted butterflies',
    'you tried to play fetch with a werewolf',
    'you tried to juggle an alchemist\u0027s fire flasks',
    'you opened a treasure chest and noticed it had teeth',
    'you played a game of hot potato with a live bomb. you lost'
];

function spawnOutcome() {
    outcome.innerText = getRandomSentence();
    var mainDie = diceImages[0];
    var randomNum = Math.floor(Math.random() * imageArray.length);
    mainDie.setAttribute("src", imageArray[randomNum]);
    mainDie.style.left = "40vh";
    mainDie.style.top = -100 * (outcome.offsetHeight / window.innerHeight) + "vh";
    mainDie.style.height = "40vh";

    for (var i = 1; i < diceImages.length; i++) {
        var dieGone = diceImages[i];
        dieGone.setAttribute("src", "");
    }
}

function printPage() {
    if (outcome.innerText != "") {
        var mainDie = diceImages[0];
        var randomY = Math.floor(Math.random() * 30) - 20;
        var randomX = Math.floor(Math.random() * 6) - 3;
        mainDie.style.top = -100 * (outcome.offsetHeight / window.innerHeight) + randomY + "vh";
        mainDie.style.left = 40 + randomX + "vh";
        console.log(mainDie.style.top)
        window.print()
    }
}

function moveEverything(amount) {
    for (die of diceImages) {
        moveItem(die, amount);
    }

    moveItem(outcomeButton, amount);
    moveItem(menuButtons, amount);
}

function moveItem(item, amount) {
    var y = parseFloat(item.style.top.split("vh")[0]);
    y = y + amount;
    item.style.top = y + "vh";
}