/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Asteroid.js":
/*!*************************!*\
  !*** ./src/Asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./MovingObject.js */ \"./src/MovingObject.js\");\n\nconst DEFAULT = { \n  COLOR: \"#FF0000\",\n  RADIUS: 20,\n  SPEED: 5\n}\n\nfunction Asteroid(options) {\n  options.color = DEFAULT.COLOR;\n  options.radius = DEFAULT.RADIUS; \n  options.vel = Util.randomVec(DEFAULT.SPEED);\n  // this.pos = options.pos;\n  // this.vel = options.vel;\n  // this.radius = options.radius;\n  // this.color = options.color;\n  // this.game = options.game;\n  // console.log(options);\n  // console.log(this);\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\nmodule.exports = Asteroid; \n\n//# sourceURL=webpack:///./src/Asteroid.js?");

/***/ }),

/***/ "./src/MovingObject.js":
/*!*****************************!*\
  !*** ./src/MovingObject.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// const Game = require (\"./game\");\n\nfunction MovingObject (optionsObj) {\n  this.pos = optionsObj.pos;\n  this.vel = optionsObj.vel;\n  this.radius = optionsObj.radius;\n  this.color = optionsObj.color;\n  this.game = optionsObj.game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  ctx.fill();\n  ctx.closePath();\n};\n\nMovingObject.prototype.move = function (ctx) {\n  let newX = this.pos[0] + this.vel[0];\n  let newY = this.pos[1] + this.vel[1];\n  this.pos = this.game.wrap([newX, newY]);\n\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObj) {\n  let radii = this.radius + otherObj.radius;\n  let center1 = this.pos;\n  let center2 = otherObj.pos;\n  let dx = center1[0] - center2[0];\n  let dy = center1[1] - center2[1];\n  let distance = Math.sqrt(dx * dx + dy * dy);\n  return (distance < radii ? true : false);\n};\n\nMovingObject.prototype.collideWith = function(otherObj) {\n  if (this.isCollidedWith(otherObj)) {\n     this.game.remove(this, otherObj);\n  } \n};\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/MovingObject.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\nconst Asteroid = __webpack_require__(/*! ./Asteroid */ \"./src/Asteroid.js\");\n\nfunction Game () {\n  this.asteroids = [];\n  this.addAsteroids();\n}\n\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 5;\nGame.fillStyle = \"skyblue\";\n\nGame.prototype.addAsteroids = function () {\n  let currGame = this;\n  for (let i = 1; i < Game.NUM_ASTEROIDS; i++) {\n    let ast = new Asteroid({ pos: currGame.randomPos(), game: currGame }); //look here. \n    this.asteroids.push(ast);\n  }\n};\n\nGame.prototype.randomPos = function () {\n  let x = Math.floor(Math.random() * Game.DIM_X);\n  let y = Math.floor(Math.random() * Game.DIM_Y);\n  return [x, y];\n};\n\nGame.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = Game.fillStyle;\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  this.asteroids.forEach(ast => {\n    ast.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function () {\n  this.asteroids.forEach(ast => {\n    ast.move();\n  });\n}\n\nGame.prototype.wrap = function (pos) {\n  if (pos[0] <= 0 || pos[1] <= 0) {\n    return [pos[0] + Game.DIM_X, pos[1] + Game.DIM_Y];\n  } else {\n    return [pos[0] % Game.DIM_X, pos[1] % Game.DIM_Y];\n  }\n};\n\nGame.prototype.checkCollisions = function () {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    let currAst = this.asteroids[i];\n    for (let j = i + 1; j < this.asteroids.length - 1; j++) {\n      let otherAst = this.asteroids[j];\n      if (currAst.isCollidedWith(otherAst)) {\n        // alert(\"COLLISION\");\n        currAst.collideWith(otherAst);\n      }\n    }\n  }\n};\n\nGame.prototype.step = function () {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\n\nGame.prototype.remove = function(...asteroids) {\n  debugger\n  // console.log(asteroids);\n  asteroids.forEach(ast => {\n    debugger\n    this.asteroids.splice(this.asteroids.indexOf(ast), 1);\n  });\n  // console.log(this.asteroids);\n  // console.log(\"___________\");\n  // this.addAsteroids();\n};\n\nmodule.exports = Game; \n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView (game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n  window.setInterval( () => {\n    this.game.step();\n    this.game.draw(this.ctx);\n    // console.log(this.game.asteroids);\n    // console.log(\"Going\");\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// console.log(\"Webpack is running\");\nconst MovingObject = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\nconst Asteroid = __webpack_require__(/*! ./Asteroid */ \"./src/Asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  window.MovingObject = MovingObject;\n  window.Asteroid = Asteroid;\n  const canvas = document.getElementById(\"game-canvas\");\n  const context = canvas.getContext(\"2d\");\n  context.fillStyle = \"skyblue\";\n  context.fillRect(0, 0, canvas.clientWidth, canvas.height);\n\n  const game = new Game();\n  const gameView = new GameView(game, context);\n  gameView.start();\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n\n  inherits(childClass, parentClass)  {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass; \n\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n      return [vec[0] * m, vec[1] * m];\n  }\n\n};\n\nmodule.exports = Util; \n\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });