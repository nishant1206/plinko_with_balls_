class Line {
    constructor(pointA, pointB) {
        this.pa = pointA;
        this.pb = pointB;
    }
    display() {
        push();
        stroke("yellow");
        strokeWeight(5);
        line(this.pa.x, this.pa.y, this.pb.x, this.pb.y);
        pop();
    }
};