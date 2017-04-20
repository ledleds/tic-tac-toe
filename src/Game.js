"strict mode";

(function(exports) {

  function Game() {
    this.player1 = 'X';
    this.player2 = '0';
    this.grid = [['', '', ''],
                 ['', '', ''],
                 ['', '', '']];
  }

  exports.Game = Game;
})(this);
