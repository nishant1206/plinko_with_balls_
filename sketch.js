var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var l = 100,
    i = 0;

var chance_input = document.getElementsByTagName("input")[0].value;
var cc_;
var cct = 0;

function setup() {
    createCanvas(800, 800);

    if (cc_ == null) {
        cc_ = 5;
    }
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height, width, 20);


    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
    }


    for (var j = 75; j <= width; j = j + 50) {

        plinkos.push(new Plinko(j, 55));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {

        plinkos.push(new Plinko(j, 155));
    }

    for (var j = 75; j <= width; j = j + 50) {

        plinkos.push(new Plinko(j, 255));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {

        plinkos.push(new Plinko(j, 355));
    }

    rope = new Line({ x: 0, y: 450 }, { x: 800, y: 450 });
}



function draw() {
    background("black");
    textSize(20)
    Engine.update(engine);

    if (cc_ == null) {
        cc_ = 5;
    }

    if (cct < cc_ + 1) {

        for (var i = 0; i < plinkos.length; i++) {

            plinkos[i].display();

        }
        // if (frameCount % 60 === 0) {
        //     particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
        //     score++;
        // }

        for (var j = 0; j < particles.length; j++) {

            particles[j].display();
        }
        for (var k = 0; k < divisions.length; k++) {

            divisions[k].display();
        }

        fill("grey");
        // while (i < divisions.length * 100) {
        //     text(l, i - 40, 500);
        //     i = i + 80;

        // }
        rope.display();
        text(500, 20, 500);
        text(400, 100, 500);
        text(300, 180, 500);
        text(200, 260, 500);
        text(100, 340, 500);
        text(100, 420, 500);
        text(200, 500, 500);
        text(300, 580, 500);
        text(400, 660, 500);
        text(500, 740, 500);
        // Score_Increaser();
        text("Score : " + score, 20, 30);
    } else {
        textSize(100);
        fill("white");
        text("Game Over", 140, 400);
        textSize(50);
        text("Your Score was :- " + score, 180, 500)
    }
}

function mousePressed() {
    if (mouseX <= 800) {
        particles.push(new Particle(mouseX, 10, 10));
        cct++;
    }
}

function chance_count_setter() {
    if (chance_input == NaN) {
        alert("Chance Value is Null, Chance set to 5");
    } else {
        cc_ = parseInt(document.getElementById("chance_taker").value);
        alert("Chance is set to " + cc_)
    }
}