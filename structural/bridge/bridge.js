
class Shape {
    constructor(name) {
        this.name = name;
    }
}

class Triangle extends Shape {
    constructor(renderer) {
        super('triangle');
        this.renderer = renderer;
    }
    toString() {
        return `Drawing ${this.name} as ${this.renderer.toString()}`
    }
}

class Square extends Shape {
    constructor(renderer) {
        super('square'); this.renderer = renderer;
    }
    toString() {
        return `Drawing ${this.name} as ${this.renderer.toString()}`
    }
}

class VectorRenderer {
    toString() {
        return `lines`;
    }
}

class RasterRenderer {
    toString() {
        return `pixels`;
    }
}

// Bridge between Shape[Square, Traingle] AND Renderer[Raster, Vector]
let sq = new Square(new RasterRenderer());
console.log(sq.toString());
sq = new Square(new VectorRenderer());
console.log(sq.toString());