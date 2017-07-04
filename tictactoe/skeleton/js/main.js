const View = require('./ttt-view.js');// require appropriate file
const Game = require('./game.js');// require appropriate file

$( () => {
  // Your code here
  let ttt = $("figure.ttt");
  let newview = new View(new Game());
});
