const Util = require("./util");
const MovingObject = require("./MovingObject");
const Asteroid = require("./Asteroid");

function Game () {
  this.asteroids = [];
  this.addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 5;
Game.fillStyle = "skyblue";

Game.prototype.addAsteroids = function () {
  let currGame = this;
  for (let i = 1; i < Game.NUM_ASTEROIDS; i++) {
    let ast = new Asteroid({ pos: currGame.randomPos(), game: currGame }); //look here. 
    this.asteroids.push(ast);
  }
};

Game.prototype.randomPos = function () {
  let x = Math.floor(Math.random() * Game.DIM_X);
  let y = Math.floor(Math.random() * Game.DIM_Y);
  return [x, y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.fillStyle;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach(ast => {
    ast.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(ast => {
    ast.move();
  });
}

Game.prototype.wrap = function (pos) {
  if (pos[0] <= 0 || pos[1] <= 0) {
    return [pos[0] + Game.DIM_X, pos[1] + Game.DIM_Y];
  } else {
    return [pos[0] % Game.DIM_X, pos[1] % Game.DIM_Y];
  }
};

Game.prototype.checkCollisions = function () {
  for (let i = 0; i < this.asteroids.length; i++) {
    let currAst = this.asteroids[i];
    for (let j = i + 1; j < this.asteroids.length - 1; j++) {
      let otherAst = this.asteroids[j];
      if (currAst.isCollidedWith(otherAst)) {
        // alert("COLLISION");
        currAst.collideWith(otherAst);
      }
    }
  }
};

Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollisions();
};


Game.prototype.remove = function(...asteroids) {
  debugger
  // console.log(asteroids);
  asteroids.forEach(ast => {
    debugger
    this.asteroids.splice(this.asteroids.indexOf(ast), 1);
  });
  // console.log(this.asteroids);
  // console.log("___________");
  // this.addAsteroids();
};

module.exports = Game; 

