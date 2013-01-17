enchant();
window.onload = function() {
    var game = new Game(320, 480);
    game.onload = function() {
        var bgSprite = new Sprite(320, 480); //背景画像となるスプライト
        var bgSurface = new Surface(320, 480); //スプライトの画像データ
        bgSurface.context.strokeStyle = 'red'; //線の色を赤にする
        bgSurface.context.beginPath(); //描画開始
        bgSurface.context.rect(100, 100, 150, 150); // 四角形
        bgSurface.context.strokeStyle = 'Blue'
        bgSurface.context.moveTo(200, 200); //直線の始点
        bgSurface.context.lineTo(300, 300); //直線の終点

        var len = 10,i;
        var x = 200, y = 200;
        bgSurface.context.moveTo(x,y);
bgSurface.context.stroke(); //描画指示
bgSprite.image = bgSurface; //image 属性として指定
game.rootScene.addChild(bgSprite); //子として追加
};
game.start(); // ゲームスタート
};