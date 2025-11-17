console.log(typeof score === "undefined" ? "undefined" : score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() { console.log(status); }

const announceArrow = () => console.log("Game started");
const startGameArrow = () => console.log(status);
var score2 = 50;
announceArrow();
startGameArrow();
