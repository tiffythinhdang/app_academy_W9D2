const Game = require("./game");

function GameView (game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  window.setInterval( () => {
    this.game.step();
    this.game.draw(this.ctx);
    // console.log(this.game.asteroids);
    // console.log("Going");
  }, 20);
};

module.exports = GameView;