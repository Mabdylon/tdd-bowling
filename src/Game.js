export class Game {
  constructor() {
    this.totalScore = 0;
    this.frameCounter = 0;
    this.frameRollCounter = 0;
    this.currentFrameScore = 0;
  }
  roll(pins) {
    if (pins > 10) {
      return -1;
    }
    if (this.frameRollCounter === 1) {
      if (this.currentFrameScore + pins > 10) {
        return -1;
      }
      this.currentFrameScore = 0;
      this.frameRollCounter = 0;
    } else {
      this.frameRollCounter++;
      this.currentFrameScore = pins;
    }
    this.totalScore += pins;
  }
  score() {
    return this.totalScore;
  }
  frameCount() {
    return this.frameCounter;
  }
  frameRollCount() {
    return this.frameRollCounter;
  }
  frameScore() {
    return this.currentFrameScore;
  }
}
