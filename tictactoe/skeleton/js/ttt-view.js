class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let currentView = this;
    this.$el.each(function() {
      let $li = $('li.cell');
      $li.each(function(idx){
        $(this).on("click", function() {
          if (currentView.game.board.isEmptyPos([Math.floor(idx/3), idx%3])) {
            currentView.makeMove($(this));
          } else {
            alert("Invalid move");
          }
          currentView.game.playMove([Math.floor(idx/3), idx%3]);
          if (currentView.game.winner()) {
            alert("Won");
          }
          // $(this).css({
          //   background: 'blue'
          // });
        });
      });
    });
  }

  makeMove($square) {
    $square.css ({
      background: 'white'
    });

    if (this.game.currentPlayer === "x") {
      $square.css({
        background: 'green'
      });
    } else {
      $square.css({
        background: 'blue'
      });
    }
  }

  setupBoard() {
    const $grid = $("<ul id='grid'>");
    $('figure.ttt').append($grid);
    $grid.css({
      height: 600,
      width: 600,
      background: 'transparent'
    });
    for(let i = 0; i<9;i++){
      const $li = $("<li class=cell>");
      $grid.append($li);
    }
    this.$el = $grid;
  }
}

module.exports = View;
