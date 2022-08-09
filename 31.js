function sumInput() {
    let numbers = [];
    let newNumb;
    let sumNumb = 0;

    while (1) {
        newNumb = prompt();
        if (newNumb == null || newNumb == '' || isNaN(newNumb) ) break;
        numbers.push(+newNumb);
    }

    for (let numb of numbers) {
        sumNumb += numb;
    }
    return sumNumb;
}
alert(sumInput());