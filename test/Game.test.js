import { Game } from "../src/Game";

let game;

beforeEach(() => {
  game = new Game();
});
afterEach(() => {});

describe("requirements", () => {
  it("should have a method named roll", () => {
    expect(game.roll).toBeDefined();
  });

  it("should have a method named score", () => {
    expect(game.score).toBeDefined();
  });

  it("should return zero score when calling score before any roll", () => {
    expect(game.score()).toBe(0);
  });
});

describe("basics game rules", () => {
  it("should return 0 when calling frameCount after creating the game", () => {
    expect(game.frameCount()).toBe(0);
  });

  it("should return 0 when calling frameRollCount after creating the game", () => {
    expect(game.frameRollCount()).toBe(0);
  });

  it("should increment frameRollCount after calling roll once", () => {
    game.roll(0);
    expect(game.frameRollCount()).toBe(1);
  });

  it("should reset frameRollCount to zero when calling roll twice", () => {
    game.roll(0);
    game.roll(0);
    expect(game.frameRollCount()).toBe(0);
  });

  it("should return X score when roll was call with X pins down", () => {
    game.roll(5);
    expect(game.score()).toBe(5);
  });

  it("should return -1 when roll is higher than max pins (10)", () => {
    const result = game.roll(11);
    expect(result).toBe(-1);
  });

  it("should return 0 when calling current frame score before roll", () => {
    expect(game.frameScore()).toBe(0);
  });

  it("should return X when calling current frame score after roll X", () => {
    game.roll(3);
    expect(game.frameScore()).toBe(3);
  });

  it("should return -1 when roll is higher frameScore when frameCounter is 1", () => {
    game.roll(4);
    const result = game.roll(7);
    expect(result).toBe(-1);
  });

  it("should increment score when calling roll multiple time", () => {
    game.roll(2);
    game.roll(3);
    expect(game.score()).toBe(5);
  });

  it("should reset framescore when playing twice", () => {
    game.roll(4);
    game.roll(3);
    expect(game.frameScore()).toBe(0);
  });
});

describe("Test complete game", () => {
  it("should play complex game and return correct score", () => {
    game.roll(4);
    game.roll(1);
    game.roll(4);
    game.roll(2);
    game.roll(3);
    game.roll(5);
    const result = game.roll(9);
    expect(result).not.toBe(-1);
    expect(game.score()).toBe(28);
    expect(game.frameScore()).toBe(9);
    expect(game.frameRollCount()).toBe(1);
  });
});
