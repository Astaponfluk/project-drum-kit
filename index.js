var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/crash.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/snare.mp3');
      kick.play();
      break;

      case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "S":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "D":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "J":
      var snare = new Audio('sounds/crash.mp3');
      snare.play();
      break;

    case "K":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;

    case "L":
      var kick = new Audio('sounds/snare.mp3');
      kick.play();
      break;

      case "ไ":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "ฟ":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "ห":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "ก":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "่่":
      var snare = new Audio('sounds/crash.mp3');
      snare.play();
      break;

    case "า":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;

    case "ส":
      var kick = new Audio('sounds/snare.mp3');
      kick.play();
      break;

      case '"':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "ฤ":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "ฆ":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "ฏ":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "๋":
      var snare = new Audio('sounds/crash.mp3');
      snare.play();
      break;

    case "ษ":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;

    case "ศ":
      var kick = new Audio('sounds/snare.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

$(document).keypress(function () {
    $("h2").css("color", "gold");
});

$(document).keypress( function (event) {
  $("h2").text(event.key);
   }
 );

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

