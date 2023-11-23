function generateRandomPicture(imageArray, diceArray){
    for (ind in diceArray) {
        let die = diceArray[ind];
        let randomNum = Math.floor(Math.random() * imageArray.length);
	    die.setAttribute("src", imageArray[randomNum]);
        let randomX = Math.floor(Math.random() * box_range_x) + box_min_x;
        let randomY = Math.floor(Math.random() * box_range_y) + box_min_y;
        die.style.left = (randomX - ind * 150) + "px"
        die.style.top = (randomY - 800) + "px"
    }
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
let box_min_y = 0;
let box_max_x = 610;
let box_max_y = 550;

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
    'you fell to the bottom of a well',
    'you tried to summon a powerful creature but summoned a rock instead',
    'you become possessed by an evil spirit',
    'you slipped getting out of the tub, faceplanted, and died',
    'a cat scratched your entire face off',
    'the potion you were making exploded in your face',
    'you were killed by 10 frightened cows',
    'the townspeople burnt you at the stake',
    'you tripped over a root and drowned in a puddle',
    'you fell down a hole and encountered a minotaur',
    'you tried to tame a dragon. it did not work',
    'is like Bazooka Joe, 5 cents a blow',
    'is like an ATM, open 24/7',
    'is like a championship ring, everybody puts a finger in her'
];

function scribble(){
  // get the canvas element you want to write to
  var canvas = document.getElementById("woodcut");
  // get a handle for the above canvas (here 2d only for simple text)
  var context = canvas.getContext("2d");
  // the canvas is blank the first time only, so erase the content
  // even if it is already blank, checking for it would be more
  // complicated and slower, too
  context.clearRect(0, 0, canvas.width, canvas.height);
  // choose a font (you can choose the size also as you can see)
  context.font = "30px Arial";
  // the letters are filled and they are filled in red
  context.fillStyle = "red";
  // center the text horizontally
  context.textAlign = "center";
  // put a random line in the middle of the canvas
  // the +10 account for the fonttype's height
  context.fillText(getRandomSentence(),0, canvas.height/2 + 10);
}

function spawnOutcome() {
    var outcome = document.getElementById("sentences")
    console.log("hi")
    outcome.innerText = getRandomSentence();
}