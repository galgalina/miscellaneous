//adds or multiplies numbers
function Calculator() {

	this.read = function(){
		this.a = +prompt("Enter first number");
		this.b = +prompt("Enter second number");
	};
	this.sum = function(){
		return this.a + this.b;
	};
	this.mul = function(){
		return(this.a * this.b);
	};
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма = " + calculator.sum() );
alert( "Произведение = " + calculator.mul() );





//adds numbers
function Accumulator(startingValue) {

	this.value = startingValue;
	this.read = function(){
		 this.value += +prompt("Add your number", 0);
	};

}

var accumulator = new Accumulator(7);
accumulator.read();
accumulator.read();
alert( accumulator.value );





//sum of two numbers
function sum(a) {
  return function(b) {
  return a+b
  }
}
sum(1)(3);


//sum of many numbers
function sum(a) {
	var currentSum = a;

	function addNumber(b){
		currentSum +=b;
		return addNumber;
	}

  addNumber.toString = function(){
  	return currentSum;
  }
  return addNumber;
  }
alert( sum(1)(13)(9)(57) );


