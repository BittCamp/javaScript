// 빈 객체 선언
var calc = {}; // class Calc{} 자바에서  Calc calc = new Calc(); 선언할거를 자바스크립트에선 이렇게함.

//맴버변수 추가. 자바에서 필드에서 필드값선언역할.
calc.x = 0;
calc.y = 0;

//맴버함수
calc.setValue = function(x,y){
	this.x = x;
	this.y = y;
}
calc.plus = function(){
	return this.x + this.y;
}
calc.minus = function(){
	return this.x - this.y;
}
calc.result = function(){
	var value1 = this.plus();
	var value2 = this.minus();
	
	document.write("<p>덧셈 = "+ value1 + "</p>");
	document.write("<p>뺄셈 = "+ value2 + "</p>");
}