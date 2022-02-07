// use named imports
import { Game } from "../src/Game";

beforeAll(() => {});
afterAll(() => {});

it("Should have a method named roll", () => {
  const game = new Game();
  expect(game.roll).toBeDefined();
});

it("Should have a method named score", () => {
  const game = new Game();
  expect(game.score).toBeDefined();
});
