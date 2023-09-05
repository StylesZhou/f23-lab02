// import { newRenderer } from "./renderer.js"
// import { Rectangle, newRectangle } from "./shapes/rectangle.js";

// const rectangle: Rectangle = newRectangle(2, 3)
// const renderer = newRenderer(rectangle)
// renderer.draw();


import { Rectangle } from "./shapes/rectangle.js";
import {Square } from "./shapes/square.js";
import { Circle } from "./shapes/circle.js";
import { Renderer } from "./renderer.js";

function main() {
   // const a:Rectangle= new Rectangle(3,4);
    const a:Circle=new Circle(3);
    const renderer:Renderer = new Renderer(a);

    renderer.draw();
}

main();