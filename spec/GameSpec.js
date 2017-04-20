"strict mode";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("players", function() {
    it("is instantaited with an 'X' player", function() {
      expect(game.player1).toEqual('X');
    });

    it("is instantaited with an '0' player", function() {
      expect(game.player2).toEqual('0');
    });
  });

  describe("grid", function() {
    it("is instantaited with a grid object", function() {
      expect(game.grid).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe("play", function() {
    it("has a play method", function() {
      expect(game.play).toBeDefined();
    });

    describe("checkField", function() {
      it("has a checkField method", function() {
        expect(game.checkField).toBeDefined();
      });

      it("throws an error if a field is already taken", function() {
        game.grid[1] = 'X';
        expect(function(){game.play(1)}).toThrowError("Space already taken!");
      });

      it("plots a move if field is free", function() {
        game.play(0);
        expect(game.grid).toEqual(['X', 2, 3, 4, 5, 6, 7, 8, 9]);
      });
    });

    describe("plotMove", function() {
      it("has a plotMove method", function() {
        expect(game.plotMove).toBeDefined();
      });
    });
  });
});
