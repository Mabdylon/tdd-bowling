import { Game } from "../src/Game";

let game;

beforeAll(() => {
  game = new Game();
});
afterAll(() => {});

it("should have a method named roll", () => {
  expect(game.roll).toBeDefined();
});

it("should have a method named score", () => {
  expect(game.score).toBeDefined();
});

it("should return zero score when calling score before any roll", () => {
  expect(game.score()).toBe(0);
});
