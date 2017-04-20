"strict mode";

(function(exports) {

  function Game() {
    this.player1 = 'X';
    this.player2 = '0';
    this.grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   //  this.moves = 0 increase moves after each play. When moves is = 9 GameOver
  }

  Game.prototype.play = function(move) {
    this.checkField(move);
  };

  Game.prototype.checkField = function(move) {
    if (this.grid[move] == 'X' || '0') {
      throw new Error('Space already taken!');
    } else {
      // plotMove(move);
    }
  };

  exports.Game = Game;
})(this);
