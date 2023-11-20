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
  document.getElementById("hexOutput").innerText = `Hexadecimal: ${hexValue}`;
}

function convertHexToBinary() {
  const hexInput = document.getElementById("hexInput").value;

  // Ensure that the input is a valid hexadecimal value
  if (/^[0-9A-Fa-f]+$/.test(hexInput)) {
    const binaryValue = parseInt(hexInput, 16)
      .toString(2)
      .padStart(hexInput.length * 4, "0");
    document.getElementById(
      "binaryOutput",
    ).innerText = `Binary: ${binaryValue}`;
  } else {
    document.getElementById("binaryOutput").innerText =
      "Please enter a valid hexadecimal value.";
  }
}
