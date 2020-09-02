var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
      preload: preload, create: create, update: update
});

var bird;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('ball', 'img/bird.png');
}

function create() {
    bird = game.add.sprite(50, 50, 'bird');
}

function update() {}