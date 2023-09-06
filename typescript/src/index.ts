import { newRenderer } from "./renderer.js"
import { Shape } from "./shapes/shape.js";
import { newRectangle } from "./shapes/rectangle.js";
import { circle } from "./shapes/circle.js";
import { square } from "./shapes/square.js";

const rectangle: Shape = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();




