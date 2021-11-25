let num = Math.round(Math.random() * 100);

let userInput = window.prompt("Please enter a number between 1 to 100 ");

if (userInput > 100) {
  alert("You entered a number above 100!");
} else {
  if (userInput < num) {
    alert("The number is too low!");
  } else if (userInput > num) {
    alert("The number is too high");
  } else {
    alert("Congratulations");
  }
}

let userInput2 = window.prompt(
  "Please enter any color from Red, Green, Blue, Pink, Violet "
);


switch (userInput2) {
  case "Red":
    alert("Roses are red.");
    break;
  case "Green":
    alert("Green is the color of leaves");
    break;
  case "Blue":
    alert("Blue is the color of the sky.");
    break;
  case "Pink":
    alert("Pink is a beautiful color. Roses are pink");
    break;
  case "Violet":
    alert("Violet is a beautiful color.");
    break;
  default:
      alert("I don't know if it's a color!");
    break;
}
