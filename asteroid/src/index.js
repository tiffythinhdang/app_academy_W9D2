// console.log("Webpack is running");
const MovingObject = require("./MovingObject");
const Asteroid = require("./Asteroid");
const GameView = require("./game_view");
const Game = require("./game");


window.addEventListener('DOMContentLoaded', (event) => {
  window.MovingObject = MovingObject;
  window.Asteroid = Asteroid;
  const canvas = document.getElementById("game-canvas");
  const context = canvas.getContext("2d");
  context.fillStyle = "skyblue";
  context.fillRect(0, 0, canvas.clientWidth, canvas.height);

  const game = new Game();
  const gameView = new GameView(game, context);
  gameView.start();

});

