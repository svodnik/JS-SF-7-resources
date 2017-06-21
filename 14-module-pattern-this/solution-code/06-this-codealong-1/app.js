function myFunction() {
	this.data = 'Context is everything!';
	function inner() {
		console.log(this);
	}
	inner();
}

myFunction();