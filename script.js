//complete this code
class Rectangle {
	// width:number;
	// heigth:number;
	
	constructor(width, heigth){
		this.width = width 
		this.heigth = heigth 
	
}
rectangleINstance(){
const rectangleArea = this.widht * this.heigth;
	return rectangleArea
}
}

class Square extends Rectangle{
   constructor(side){
  super(side,side);
   }

squareInstance(){
const squareArea = this.widht * this.height
	return squareArea
}
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
