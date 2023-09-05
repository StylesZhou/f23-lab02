// function square(sideLen: number): Shape {
//     return {
//         sideLen,
//         computeArea: function (): number {
//             return sideLen * sideLen
//         }
//     }
// }

// export { square }
import { Rectangle } from "./rectangle";
class Square extends Rectangle
{
    
    constructor(sideLen: number) {
       super(sideLen,sideLen);
    }
  
}
export{Square}