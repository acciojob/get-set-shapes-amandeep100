//complete this code
class Rectangle {
	width:number;
	heigth:number;
	
	constructor(width:number, heigth:number){
		this.width = width 
		this.heigth = heigth 
	
}
rectangleINstance(){
const rectangleArea = this.widht * this.heigth;
	return rectangleArea
}
}

class Square extends Rectangle{
   constructor(widht,heigth){
  super(widht,heigth);
   }

squareInstance(){
const squareArea = this.widht * this.height
	return squareArea
}
}
class Square extends Animal {}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
