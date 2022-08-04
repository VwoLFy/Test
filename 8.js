let startN = 2;
let endN = +prompt('Your finish?');
out2:
for (let i = startN; i <= endN; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue out2;
        }
    }
    alert(i);
}