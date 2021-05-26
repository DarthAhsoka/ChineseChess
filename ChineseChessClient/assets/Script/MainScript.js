var Board = require("Board")
module.exports = cc.Class({
    extends: cc.Component,
    
    properties: {
        GameBoard: {
            default: null,
            type: Board
        },
    },

    // use this for initialization
    onLoad: function () {
        this.GameBoard = new Board;
        this.GameBoard.initBoard();
        this.GameBoard.printBoard();
    },

    // called every frame
    update: function (dt) {

    },
});
