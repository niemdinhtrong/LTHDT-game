var game = function(){
    this.canvas = null;
    this.context = null;
    this.width = 483;
    this.height = 725;

    this.bird = null;
    this.bg = null;
    this.pipe = null;
    this.base = null;

    this.gameOver = false;

    var self = this;
    this.init = function(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);

        //create bird
        this.bird = new bird(this);
        this.bird.init();

        //backgroud
        this.bg = new bg(this);
        this.bg.init();

        this.base = new base(this);
        this.base.init();

        this.pipe = new pipe(this);
        this.pipe.init();

        this.listenMouse();
        this.loop();
    }

    this.listenMouse = function(){
        this.canvas.addEventListener('click', function(){
            self.bird.flap();
        });
    }

    this.loop = function(){
        self.update();
        self.draw();
        setTimeout(self.loop, 33);
    }

    this.update = function(){
        this.bird.update();
        this.bg.update();
        this.pipe.update();
        this.base.update();

    }

    this.draw = function(){
        this.bg.draw();
        this.bird.draw();
        this.pipe.draw();
        this.base.draw();
    }
}

var g = new game();
g.init();
