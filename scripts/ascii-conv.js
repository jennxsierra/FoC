/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function convertDecimalToAscii() {
  const decimalInput = document.getElementById("decimalInput").value;

  if (decimalInput >= 0 && decimalInput <= 127) {
    const asciiCharacter = String.fromCharCode(decimalInput);
    document.getElementById(
      "asciiOutput",
    ).innerText = `ASCII Character: ${asciiCharacter}`;
  } else {
    document.getElementById("asciiOutput").innerText =
      "Please enter a valid decimal between 0 and 127.";
  }
}
