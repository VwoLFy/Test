function filterRangeInPlace(arr, a, b) {
    //arr = arr.filter(item => (item >= a && item <= b));

    for (let item of arr) {
        item > b || item < a ? arr.splice(arr.indexOf(item),1) : 0;
    }

//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
    
//         // удалить, если за пределами интервала
//         if (val < a || val > b) {
//           arr.splice(i, 1);
//           i--;
//         }
// }
}


let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]