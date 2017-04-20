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
      expect(game.grid).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe("Play", function() {
    it("has a play method", function() {
      expect(game.play).toBeDefined();
    });
  });

  describe("Check field", function() {
    var error = "Space already taken!"
    it("has a checkField method", function() {
      expect(game.checkField).toBeDefined();
    });

    it("throws an error if a field is already taken", function() {
      game.grid[1] = 'X';
      expect(function(){game.play(1)}).toThrowError("Space already taken!");
    });
  });
});
