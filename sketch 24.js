const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber1,rubber2,rubber3,
rubber4,rubber5,rubber6,rubber7,
rubber8,rubber9,rubber10;
var stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(600,469,2);
    rubber2 = new Rubber(601,470,2);
    rubber3 = new Rubber(602,468,2);
    rubber4 = new Rubber(604,470,2);
    rubber5 = new Rubber(606,471,2);
    rubber6 = new Rubber(600,471,2);
    rubber7 = new Rubber(603,472,2);
    rubber8 = new Rubber(604,470,2);
    rubber9 = new Rubber(605,472,2);
    rubber10 = new Rubber(607,473,2);
    stone = new Stone(300,350,50,20);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
    
}