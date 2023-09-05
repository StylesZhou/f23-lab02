// import { newRectangle, Rectangle } from "./shapes/rectangle.js";

// function newRenderer(rectangle: Rectangle) {
//     return {
//         draw() {
//             const area: number = rectangle.computeArea()
//             console.log("Shape drawn\n" + "Its area is " + area)
//         }
//     }
// }

// export { newRenderer }

// import { Shape } from "./shapes/shape";
class Renderer {
    private shape:Shape;
    
    constructor(shape:Shape) {
        this.shape = shape;
    }

    draw():void {
        const area:number= this.shape.computeArea();

        // assume implementation

        console.log("Shape printed\n" + "Its area is " + area);
    }
}
export{Renderer}