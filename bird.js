var bird = function(game){
    this.game = game;
    this.images = [];
    this.loaded = false;
    this.img1Loaded = false;
    this.img2Loaded = false;
    this.img3Loaded = false;
    this.currentImage = null;
    this.currentImageIndex = 0;
    this.currentFrame = 0;

    this.y = 0;
    this.x = 100;
    this.speedy = 0;
    this.giatoc = 0.1;
    this.diem = 0;


    var self = this;

    this.init = function(){
        this.loadImages();
    }

    this.loadImages = function(){
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        img1.onload = function(){
            self.img1Loaded = true;
            self.currentImage = img1;
            self.images.push(img1);
        }
        img2.onload = function(){
            self.img2Loaded = true;
            self.images.push(img2);
        }
        img3.onload = function(){
            self.img3Loaded = true;
            self.images.push(img3);
        }
        //load images
        img1.src = 'images/chim.png';
        img2.src = 'images/chim2.png';
        img3.src = 'images/chim3.png';

    this.update = function(){
        if (!self.img1Loaded || !self.img2Loaded || !self.img3Loaded){
            return;
        }

        self.currentFrame++;
        if(self.currentFrame % 10 == 0){
            self.changeImage();
        }
        this.speedy += this.giatoc;
        this.y += this.speedy;
        if (this.y >= 560){
            this.y = 560;
            this.game.gameOver = true;
        }
        this.checkHitPipe();
        this.tinhdiem();
    }
    // check chim cham ong
    this.checkHitPipe = function(){
        if((
            (this.x + 70 > this.game.pipe.x) || 
            (this.x < this.game.pipe +60)
            )
            &&
            (
            (this.y < this.game.pipe.y - 160) || 
            (this.y + 50 > this.game.pipe.y)
            )
            
        ){
            this.game.gameOver = true;
        }
    }

    this.tinhdiem = function(){
        if(this.x == this.game.pipe.x + 60) 
            {
                this.diem++;
                console.log(this.diem);
            }
    }
    this.flap = function(){
        if(this.game.gameOver){
            return;
        }
        this.speedy = -3.5;
    }

    this.changeImage = function(){
        if (this.currentImageIndex == 2){
            this.currentImageIndex = 0;
        }
        else {
            this.currentImageIndex++;
        }
        this.currentImage = this.images[this.currentImageIndex];
    }

    this.draw = function(){
        if (self.img1Loaded && self.img2Loaded && self.img3Loaded){
            self.game.context.drawImage(self.currentImage, this.x, this.y);
        }
        
    }
    }
}