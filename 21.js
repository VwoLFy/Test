let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator () {
    this.numb1;
    this.numb2;
    this.read = function () {
        this.numb1 = +prompt("#1");
        this.numb2 = +prompt("#2");
    };
    this.sum = function () { return this.numb1 + this.numb2 };
    this.mul = function () { return this.numb1 * this.numb2 };
}
