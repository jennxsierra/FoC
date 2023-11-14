/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let aInputPressed = false;
let bInputPressed = false;
let abInputPressed = false;

function toggleAInput() {
  if (!aInputPressed) {
    document.getElementById("halfAdderImage").src = "https://github.com/jennxsierra/foc/blob/main/images/ha-a-on.png";
    aInputPressed = true;
    bInputPressed = false;
    abInputPressed = false;
  }
}

function toggleBInput() {
  if (!bInputPressed) {
    document.getElementById("halfAdderImage").src = "https://github.com/jennxsierra/foc/blob/main/images/ha-b-on.png";
    aInputPressed = false;
    bInputPressed = true;
    abInputPressed = false;
  }
}

function toggleABInput() {
  if (!abInputPressed) {
    document.getElementById("halfAdderImage").src = "https://github.com/jennxsierra/foc/blob/main/images/ha-ab-on.png";
    aInputPressed = false;
    bInputPressed = false;
    abInputPressed = true;
  }
}
