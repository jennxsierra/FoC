/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function convertBinaryToHex() {
  const binaryInput = document.getElementById("binaryInput").value;
  const decimalValue = parseInt(binaryInput, 2);
  const hexValue = decimalValue.toString(16).toUpperCase();
  document.getElementById("hexOutput").innerText = `Result: ${hexValue}`;
}

function convertHexToBinary() {
  const hexInput = document.getElementById("hexInput").value;
  const decimalValue = parseInt(hexInput, 16);
  const binaryValue = decimalValue.toString(2);
  document.getElementById("binaryOutput").innerText = `Result: ${binaryValue}`;
}
