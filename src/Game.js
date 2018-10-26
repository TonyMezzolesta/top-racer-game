import Input from "./Input";
import Timer from "./Timer";

const GAME_STATE = {
  MAIN_MENU: 0,
  RUNNING: 1,
  GAME_OVER: 2
};

const TIME_BETWEEN_LEVELS = 5000; // 5 seconds

class Game {
  constructor() {
    this.inputStates = {};

    // game states
    this.currentGameState = GAME_STATE.RUNNING;
    this.currentLevel = 1;
    this.currentLevelTime = TIME_BETWEEN_LEVELS;
  }

  start(canvasElement) {
    // Canvas, context etc.
    this.canvas = canvasElement;

    // important, we will draw with this object
    this.ctx = this.canvas.getContext("2d");
    // default police for text
    this.ctx.font = "20px Arial";

    // Create the different key and mouse listeners
    Input.addListeners(this.inputStates, this.canvas);

    // We create tge balls: try to change the parameter
    //createBalls(nbBalls);

    requestAnimationFrame(this.mainLoop.bind(this));
  }

  clearCanvas() {
    const { width, height } = this.canvas;
    this.ctx.clearRect(0, 0, width, height);
  }

  mainLoop(time) {
    // number of ms since last frame draw
    const delta = Timer.getDelta(time);

    this.clearCanvas();

    switch (this.currentGameState) {
      case GAME_STATE.RUNNING:
        if (this.currentLevelTime < 0) {
          this.goToNextLevel();
        }

        break;
      case GAME_STATE.MAIN_MENU:
        // TO DO !
        break;
      case GAME_STATE.GAME_OVER:
        this.ctx.fillText("GAME OVER", 50, 100);
        this.ctx.fillText("Press SPACE to start again", 50, 150);
        this.ctx.fillText("Move with arrow keys", 50, 200);
        this.ctx.fillText("Survive 5 seconds for next level", 50, 250);

        break;
      default:
        break;
    }

    // call the animation loop every 1/60th of second
    requestAnimationFrame(this.mainLoop.bind(this));
  }

  goToNextLevel() {
    // reset time available for next level
    // 5 seconds in this example
    this.currentLevelTime = 5000;
    this.currentLevel++;
    // Add two balls per level
  }

  startNewGame() {
    this.currentLevelTime = 5000;
    this.currentLevel = 1;
    this.currentGameState = GAME_STATE.RUNNING;
  }

  displayScore() {
    const { ctx, currentLevel, currentLevelTime } = this;
    ctx.save();
    ctx.fillStyle = "Green";
    ctx.fillText("Level: " + currentLevel, 300, 30);
    ctx.fillText("Time: " + (currentLevelTime / 1000).toFixed(1), 300, 60);
    ctx.restore();
  }
}

export default Game;