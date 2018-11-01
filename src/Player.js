import SpriteImage from "./SpriteImage";

class Player {
  static maxSpeed = 0.5;

  constructor(ctx, inputStates) {
    this.ctx = ctx;
    this.inputStates = inputStates;
    this.position = {
      x: 0,
      y: 0
    };
    this.scale = 0.7;
  }

  setImage(img, ...args) {
    this.sprite = new SpriteImage(img, ...args);
  }

  moveToStartPosition() {
    const { height: cH, width: cW } = this.ctx.canvas;
    this.position = {
      x: cW / 2 - this.sprite.width * this.scale / 2,
      y: cH - 16 - this.sprite.height * this.scale
    };
  }

  setPosition(x, y) {
    this.position = { x, y };
  }

  update(dt) {
    if (this.inputStates.left) {
      this.position.x += -Player.maxSpeed * dt;
    }
    if (this.inputStates.right) {
      this.position.x += Player.maxSpeed * dt;
    }

    this.sprite.draw(this.ctx, this.position.x, this.position.y, this.scale);
  }
}

export default Player;