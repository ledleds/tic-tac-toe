"strict mode";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("has player1 as current player", function() {
    expect(game.currentPlayer).toEqual(game.player1);
  });

  it("instantiates a new instance of rules", function() {
    expect(game.rules).toEqual(jasmine.any(Rules));
  });

  describe("players", function() {
    it("is instantaited with an 'X' player", function() {
      expect(game.player1).toEqual([]);
    });

    it("is instantaited with an '0' player", function() {
      expect(game.player2).toEqual([]);
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
        expect(function(){game.play(1);}).toThrowError("Space already taken!");
      });
    });

    describe("plotMove", function() {
      it("has a plotMove method", function() {
        expect(game.plotMove).toBeDefined();
      });

      // it("moves number to players array if field is free", function() {
      //   game.play(0);
      //   expect(game.player1).toEqual([1]);
      // }); //make a new mehtod which is called by plotMove

      it("plots an X if field is free and current player is p1", function() {
        game.play(0);
        expect(game.grid).toEqual(['X', 2, 3, 4, 5, 6, 7, 8, 9]);
      });

      describe("switchTurn", function() {
        it("has a switchTurn method", function() {
          expect(game._switchTurn).toBeDefined();
        });

        it("changes currentPlayer after their turn", function() {
          game.play(0);
          expect(game.currentPlayer).toEqual(game.player2);
        });
      });
    });
  });
});
