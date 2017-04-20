"strict mode";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Players", function() {
    it("is instantaited with an 'X' player", function() {
      expect(game.player1).toEqual('X');
    });

    it("is instantaited with an '0' player", function() {
      expect(game.player2).toEqual('0');
    });
  });

  describe("Grid", function() {
    it("is instantaited with a grid object", function() {
      expect(game.grid).toEqual([['', '', ''], ['', '', ''], ['', '', '']]);
    });
  });
});
