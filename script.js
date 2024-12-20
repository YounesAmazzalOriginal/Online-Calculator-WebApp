// () Symbol witch Between ) & (
// let parenthesesSwitcher = false;
// function parenthesesSymbol() {
//   var display = document.querySelector("#display");

//   if (parenthesesSwitcher === false) {
//     parenthesesSwitcher = true;

//     display.value += "(";
//   }
//   //
//   else {
//     parenthesesSwitcher = false;

//     display.value += ")";
//   }
// }

// Numbers
function btn(numTarget) {
  var display = document.querySelector("#display");
  if (numTarget == "x") {
    numTarget = "*";
  }
  display.value += numTarget;
}

// Clear Display
function clearDisplay() {
  var display = document.querySelector("#display");
  display.value = "";
}

// Toggle Archive
function archiveBtn() {
  var archive = document.querySelector(".archive");
  archive.classList.toggle("archiveHide");
}

// backSpace
function backSpace() {
  var display = document.querySelector("#display");
  display.value = display.value.slice(0, -1);
}

// Calcule Operations

function displayResault() {
  var display = document.querySelector("#display");
  var archive = document.querySelector(".archive");

  let operation = display.value;

  try {
    if (isNaN(eval(display.value))) {
      display.value = "Error Syntax";

      return;
    }
    //
    else {
      display.value = eval(display.value);

      archive.innerHTML += singleArchive(operation, eval(display.value));
    }
  } catch (error) {}
}
