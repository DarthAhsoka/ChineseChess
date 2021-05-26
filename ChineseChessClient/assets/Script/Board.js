// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var Piece = require("Piece");
var Constant = require("Constant")
module.exports = cc.Class({
    extends: cc.Component,

    properties: {

        /**
         * 上方棋子颜色
         */
        UpPieceColor:{
            default: 'Black',
        }, 

        /** 
         * 定义棋盘
         * 棋盘是一个二维数组
         */
        BoardXLen: {
            default: 9,
            type: cc.Integer
        },

        BoardYLen: {
            default: 10,
            type: cc.Integer
        },

        Board: {
            default: [],
            type: cc.Array
        },

        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    /**
     * 初始化棋盘
     */
    initBoard: function() {
        
       this.Board = new Array(this.BoardYLen);
        for(let i = 0; i < this.BoardXLen; ++i) {
            this.Board[i] = new Array(this.BoardYLen)
            for(let j = 0; j < this.BoardYLen; ++j) {
                this.Board[i][j] = '0';
            }
        }

        // 现在开始构造初始化棋盘
        let PieceRedChe = new Piece
        PieceRedChe.setPiecePosition(0,0);
        PieceRedChe.setPieceType(Constant.PieceRedChe);
        PieceRedChe.setPieceTextureImagePath("../Texture/redpiece/red_che.png")
        this.Board[0][0] = PieceRedChe 
    },

    /**
     * 打印棋盘当前的情况 
     **/
    printBoard() {
        console.log(this.Board)
    }

    // update (dt) {},
});
