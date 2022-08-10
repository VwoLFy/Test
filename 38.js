function Calculator() {
    this.calculate = function (str) {
        
        let strArr = str.split(" ");
        let a = +strArr[0];
        let op = strArr[1];      
        let b = +strArr[2];

        if (isNaN(a) || isNaN(b) || !this.methods[op]) {
            return "Error"
        }

        return this.methods[op](a, b);
    }
    
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,       
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 * 3");
alert( powerCalc.calculate("3 + 7") ); // 10