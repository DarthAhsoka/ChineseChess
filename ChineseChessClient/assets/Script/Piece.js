// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


/**
 * 定义棋子
 */
module.exports =  cc.Class({

    extends: cc.Sprite,

    ctor:function() {
        // 渲染节点
        var bg = new cc.Sprite(this.TextureImagePath, cc.rect(82,82,82,82));
        this.addComponents(bg)
    },

    properties: {
        fenType:  {
            default: '',
        },

        TextureImagePath: {
            default: '',
        },

        // 当前棋子所在棋盘位置
        PosX: {
            default: 0,
            type: cc.Integer
        },
        PosY: {
            default: 0,
            type: cc.Integer
        },
    },

    // 获取当前位置
    getPiecePosition: function() {
        return [this.PosX, this.PosY];
    },

    // 设置当前位置
    setPiecePosition: function(X,Y) {
        this.PosX = X
        this.PosY = Y
    },

    // 设置棋类型
    setPieceType: function(type) {
        this.fenType = type
    },

    // 设置纹理
    setTextureImagePath: function(textureImgPath) {
        this.TextureImagePath  = textureImgPath
    }
});