
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
// }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);
// ALL OF THIS WAS BASICALLY THE WAY YOUR NOT SUPPOSED TO DO IT!!!!!!


// function hex(r, g, b) {
//     return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
// }
// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`
// }


//  
// "#ff6419"
// "rgb(255,100,25"

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() {
        const { r, g, b } = this;
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }

}


const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
