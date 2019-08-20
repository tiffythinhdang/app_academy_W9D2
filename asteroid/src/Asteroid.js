const Util = require("./util");
const MovingObject = require("./MovingObject.js");

const DEFAULT = { 
  COLOR: "#FF0000",
  RADIUS: 20,
  SPEED: 5
}

function Asteroid(options) {
  options.color = DEFAULT.COLOR;
  options.radius = DEFAULT.RADIUS; 
  options.vel = Util.randomVec(DEFAULT.SPEED);
  // this.pos = options.pos;
  // this.vel = options.vel;
  // this.radius = options.radius;
  // this.color = options.color;
  // this.game = options.game;
  // console.log(options);
  // console.log(this);
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid; 