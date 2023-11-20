/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function changeStep(step) {
  const imageElement = document.getElementById("mlImage");
  const imageName = `../images/ml-step${step}.png`;

  if (step >= 1 && step <= 5) {
    imageElement.src = imageName;
  }
}

function resetSteps() {
  const imageElement = document.getElementById("mlImage");
  imageElement.src = "../images/ml-start.png";
}
