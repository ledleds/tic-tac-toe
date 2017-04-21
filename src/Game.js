"strict mode";

(function(exports) {

   function Game() {
    this.player1 = [];
    this.player2 = [];
    this.grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.currentPlayer = this.player1;
    this.rules = new Rules();
   //  this.moves = 0 increase moves after each play. When moves is = 9 GameOver
  }

  Game.prototype.play = function(move) {
    this.checkField(move);
    this.plotMove(move);
    this._switchTurn();
  };

  Game.prototype.checkField = function(move) { //check to see if number exists in grid array
    if (this.grid[move] == 'X' || this.grid[move] == '0') {
      throw new Error('Space already taken!');
    }
  };

  Game.prototype.plotMove = function(move) {
    this.addToPlayerArray(move);
    if (this.currentPlayer == this.player1) {
      this.grid[move] = 'X';
    } else {
      this.grid[move] = '0';
    }
  };

  Game.prototype.addToPlayerArray = function(move) {
    this.currentPlayer.push(this.grid[move]);
  };

  Game.prototype._switchTurn = function() {
    if (this.currentPlayer == this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  };

  exports.Game = Game;
})(this);
