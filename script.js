//complete this code
 class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }

  set height(value) {
    this._height = value;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return this.width * 4;
  }
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
