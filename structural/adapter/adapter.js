class Square
{
  constructor(side)
  {
    this.side = side;
  }
}

function area(rectangle)
{
  return rectangle._width * rectangle._height;
}

class SquareToRectangleAdapter {
    constructor(sq) {
        return { _width: sq.side, _height: sq.side }
    }
}

// build an adapter called SquareToRectangleAdapter
// s.t. we could call
//
let sq = new Square(123);
console.log(area(new SquareToRectangleAdapter(sq)));