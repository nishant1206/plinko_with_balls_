class Particle {
    constructor(x, y, r) {

        var options = {
            restitution: 0.4,
            density: 50
        }
        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        var score_count = "count";
        this.score_count_ = score_count;
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        if (pos.y > 450) {
            if (pos.x > 0 && pos.x < 80 && this.score_count_ == "count") {
                score = score + 500;
                this.score_count_ = "end";
            }
            if (pos.x > 80 && pos.x < 160 && this.score_count_ == "count") {
                score = score + 400;
                this.score_count_ = "end";
            }
            if (pos.x > 160 && pos.x < 240 && this.score_count_ == "count") {
                score = score + 300;
                this.score_count_ = "end";
            }
            if (pos.x > 240 && pos.x < 320 && this.score_count_ == "count") {
                score = score + 200;
                this.score_count_ = "end";
            }
            if ((pos.x > 320 && pos.x < 400 && this.score_count_ == "count") || (pos.x > 400 && pos.x < 480 && this.score_count_ == "count")) {
                score = score + 100;
                this.score_count_ = "end";
            }
            if (pos.x > 480 && pos.x < 560 && this.score_count_ == "count") {
                score = score + 200;
                this.score_count_ = "end";
            }
            if (pos.x > 560 && pos.x < 640 && this.score_count_ == "count") {
                score = score + 300;
                this.score_count_ = "end";
            }
            if (pos.x > 640 && pos.x < 720 && this.score_count_ == "count") {
                score = score + 400;
                this.score_count_ = "end";
            }
            if (pos.x > 720 && pos.x < 800 && this.score_count_ == "count") {
                score = score + 500;
                this.score_count_ = "end";
            }
        }
        pop();
    }
};