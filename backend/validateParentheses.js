require("express");

const string = "asdl()()()fkaj";

const validateParentheses = () => {
  let pCount = 0;

  for (i in string) {
    if (string[i] === "(") {
      pCount++;
    } else if (string[i] === ")") {
      if (pCount == 0) {
        console.log("NOT VALID");
        return;
      } else {
        pCount--;
      }
    }
  }
  if (pCount === 0) {
    console.log("VALIDATED!");
  } else {
    console.log("NOT VALID");
  }
};

module.exports = validateParentheses;