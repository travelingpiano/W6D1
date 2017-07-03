class View {
  constructor(game, $el) {

  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    $('figure.ttt').append("<ul id='grid'></ul>");
    $("#grid").css({
      height: 600,
      width: 600,
      // border: '4px solid red',
      background: 'transparent'
    });
    for(let i = 0; i<9;i++){
      const $li = $("<li class=cell>");

      // $("#grid").append("<li style='list-style-type: none;' value='' class='cell' ></li>");
      // $("li.cell").css({
      //   float: 'left',
      //   width: 188,
      //   height: 188,
      //   border: '4px solid black',
      //   background: 'gray'
      // });
      $li.on("mouseover",function(){
        $li.css({
          background: 'yellow'
        });
      });
      $li.on("mouseout",function(){
        $li.css({
          background: 'gray'
        });
      });
      $("#grid").append($li);
    }
  }
}

module.exports = View;
