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
    "images/dice/dice-37.png"
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
let box_min_x = 350;
let box_min_y = 0;
let box_max_x = 610;
let box_max_y = 550;

let box_range_x = box_max_x - box_min_x;
let box_range_y = box_max_y - box_min_y;

window.onload = () => generateRandomPicture(imageArray, diceImages);

button.addEventListener("click", () => generateRandomPicture(imageArray, diceImages));

function displayText() {
  var text = document.getElementById("textField");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
  }
}