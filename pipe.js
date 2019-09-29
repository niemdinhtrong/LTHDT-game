var pipe = function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x = 300;
    this.y = 400;

    var self = this;

    this.init = function(){
        this.loadImage();
    }

    this.loadImage = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true;
            console.log('images loaded');
        }
        this.image.src = 'images/ongnuoc.png';
    }
    this.update = function(){
        if (this.game.gameOver){
            return;
        }
        this.x--;
        if (this.x == -30){
            this.x = 483;
            this.y = Math.floor(Math.random() * 300 + 350)
        }
    }
    this.draw = function(){
        if (this.loaded == false){
            return;
        }
        self.game.context.drawImage(this.image,this.x,this.y - 400);
        self.game.context.drawImage(this.image,this.x,this.y);
    }
}