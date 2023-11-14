/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let flipFlopState = "off";

function toggleSInput() {
  if (flipFlopState === "off") {
    flipFlopState = "sq";
  } else if (flipFlopState === "sq") {
    flipFlopState = "q";
  } else if (flipFlopState === "q") {
    flipFlopState = "sq";
  } else if (flipFlopState === "sr" || flipFlopState === "r") {
    flipFlopState = "sr";
  }
  updateFlipFlopImage();
}

function toggleRInput() {
  if (flipFlopState === "off") {
    flipFlopState = "r";
  } else if (flipFlopState === "sq") {
    flipFlopState = "sr";
  } else if (flipFlopState === "sr") {
    flipFlopState = "sq";
  }
  updateFlipFlopImage();
}

function updateFlipFlopImage() {
  document.getElementById(
    "flipFlopImage",
  ).src = `https://github.com/jennxsierra/foc/blob/main/images/flip-flop-${flipFlopState}.png`;
}
