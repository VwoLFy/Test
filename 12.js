function pow(a, b) {
    let res = 1;
    for (let i = 1; i <= b; i++) {
        res *= a;

    }
    return res;
}

alert(pow(+prompt("1#"), +prompt("2#")));