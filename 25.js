function randomInteger(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min);
}
alert( randomInteger(1, 3) );