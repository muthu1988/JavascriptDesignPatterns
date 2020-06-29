class Rectangle {
    constructor(width, lenght) {
        this.width = width;
        this.lenght = lenght;
    }
    setWidth(width) {
        this.width = width;
    }
    setLength(lenght) {
        this.lenght = lenght;
    }
    area() {
        return `${this.width}*${this.lenght}`
    }
}

function modify(rc) {
    rc.lenght  = 10;
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}

const rect = new Rectangle(10, 5);
modify(rect);
console.log(rect.area());
const sq = new Square(4);
modify(sq);
console.log(`Expected 4*4 and got ${sq.area()}`);

