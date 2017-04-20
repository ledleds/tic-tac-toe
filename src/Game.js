"strict mode";

(function(exports) {

  function Game() {
    this.player1 = 'X';
    this.player2 = '0';
    this.grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   //  this.moves = 0 increase moves after each play. When moves is = 9 GameOver
  }

  Game.prototype.play = function(move) {
    console.log(this.grid)
    this.checkField(move);
    this.plotMove(move);
  };

  Game.prototype.checkField = function(move) {
    console.log(this.grid[move])
    if (this.grid[move] == 'X' || this.grid[move] == '0') {
      throw new Error('Space already taken!');
    }
  };

  Game.prototype.plotMove = function (move) {
    this.grid[move] = 'X';
  };

  exports.Game = Game;
})(this);
