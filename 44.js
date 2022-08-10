function unique(arr) {
    let unicArr = [];
    while (arr.length > 0) {
        let current = arr.shift();
        unicArr.push(current);
        while (arr.includes(current)) {
        arr.splice(arr.lastIndexOf(current),1)
        }        
    }
    return unicArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O