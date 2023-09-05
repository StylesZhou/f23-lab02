// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

// function newRectangle(width: number, height: number): Rectangle {
//     return {
//         width,
//         height,

//         computeArea: function (): number {
//             return width * height
//         }
//     }
// }

// export { Rectangle, newRectangle }
// import { Shape } from "./shape";
class Rectangle implements Shape
{
    private height:number;
    private width:number;
    constructor(height: number,width:number) {
        this.height = height;
        this.width=width;
    }
    computeArea():number{
        return this.height * this.width;
    }
}
export {Rectangle}
