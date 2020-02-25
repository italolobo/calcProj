let numberA = "";
let numberTemp = 0;
let numberNew = "";
let op = "";
let tela = document.getElementById("tela");

function btnClicked(button) {
  FirstCalc(button);
}

function FirstCalc(input) {
  switch (input) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      numberA = numberA + input;
      tela.textContent = numberA;
      break;
    case "+":
      op = "+";
      numberNew = parseInt(numberTemp) + parseInt(numberA);
      numberTemp = parseInt(numberNew);
      numberA = "";
      tela.textContent = numberNew;
      break;
    case "-":
      numberNew = parseInt(numberTemp) - parseInt(numberA);
      numberTemp = parseInt(numberNew);
      numberA = "";
      tela.textContent = numberNew;
      break;
    case "*":
      numberNew = parseInt(numberTemp) * parseInt(numberA);
      numberTemp = parseInt(numberNew);
      numberA = "";
      tela.textContent = numberNew;
      break;
    case "/":
      numberNew = parseInt(numberTemp) / parseInt(numberA);
      numberTemp = parseInt(numberNew);
      numberA = "";
      tela.textContent = numberNew;
      break;
    default: {
      break;
      
    }
  }
  console.log(numberNew);
}
