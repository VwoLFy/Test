let calculator = {
    read() {
        this.numb1 = +prompt("#1");
        this.numb2 = +prompt("#2");
    },
    sum() { return this.numb1 + this.numb2 },
    mul() { return this.numb1 * this.numb2 },
    // ... ваш код ...
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );