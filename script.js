// Dice Roller Program
function rollDice() {
  const numDice = document.querySelector('input[type="number"]').value;
  const diceResult = document.getElementById("dice-result");
  const diceImages = document.getElementById("dice-images");

  diceResult.innerHTML = "";
  diceImages.innerHTML = "";

  for (let i = 0; i < numDice; i++) {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.createElement("img");
    diceImage.src = `./images/dice${diceValue}.png`;
    diceImages.appendChild(diceImage);

    const diceSpan = document.createElement("span");
    diceSpan.textContent = `Dice: ${diceValue}`;
    diceSpan.style.marginRight = "10px";
    diceResult.appendChild(diceSpan);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    rollDice();
  }
});

rollDice();
