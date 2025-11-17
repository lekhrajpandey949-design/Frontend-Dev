"use strict";
function pyramid(limit = 5) {
  for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 0; j < i; j++) line += "* ";
    console.log(line.trim());
  }
}
pyramid();

function pyramidVar(limit = 5) {
  for (var i = 1; i <= limit; i++) {
    var line = "";
    for (var j = 0; j < i; j++) line += "* ";
    console.log(line.trim());
  }
}
pyramidVar();
