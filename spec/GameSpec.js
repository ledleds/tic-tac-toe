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

    it("is instantaited with an 'O' player", function() {
      expect(game.player2).toEqual('O');
    });
  });
});
