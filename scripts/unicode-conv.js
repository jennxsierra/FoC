/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function convertUnicodeToSymbol() {
  const unicodeInput = document.getElementById("unicodeInput").value;

  // Ensure that the input is a valid hexadecimal value
  if (/^[0-9A-Fa-f]+$/.test(unicodeInput)) {
    const decimalValue = parseInt(unicodeInput, 16);
    const symbol = String.fromCodePoint(decimalValue);
    document.getElementById(
      "symbolOutput",
    ).innerText = `UNICODE Character: ${symbol}`;
  } else {
    document.getElementById("symbolOutput").innerText =
      "Please enter a valid Unicode code point.";
  }
}
