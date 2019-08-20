
// const Game = require ("./game");

function MovingObject (optionsObj) {
  this.pos = optionsObj.pos;
  this.vel = optionsObj.vel;
  this.radius = optionsObj.radius;
  this.color = optionsObj.color;
  this.game = optionsObj.game;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
};

MovingObject.prototype.move = function (ctx) {
  let newX = this.pos[0] + this.vel[0];
  let newY = this.pos[1] + this.vel[1];
  this.pos = this.game.wrap([newX, newY]);

};

MovingObject.prototype.isCollidedWith = function(otherObj) {
  let radii = this.radius + otherObj.radius;
  let center1 = this.pos;
  let center2 = otherObj.pos;
  let dx = center1[0] - center2[0];
  let dy = center1[1] - center2[1];
  let distance = Math.sqrt(dx * dx + dy * dy);
  return (distance < radii ? true : false);
};

MovingObject.prototype.collideWith = function(otherObj) {
  if (this.isCollidedWith(otherObj)) {
     this.game.remove(this, otherObj);
  } 
};


module.exports = MovingObject;