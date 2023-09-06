import {Shape } from "./shape.js";

function newRectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export { newRectangle }
// import { Shape } from "./shape";
// class Rectangle implements Shape
// {
//     private height:number;
//     private width:number;
//     constructor(height: number,width:number) {
//         this.height = height;
//         this.width=width;
//     }
//     computeArea():number{
//         return this.height * this.width;
//     }
// }
// export {Rectangle}
