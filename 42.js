function shuffle (arr) {
    arr.sort( () => (Math.random() - Math.random()));
    alert(arr);    
}

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
