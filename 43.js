function getAverageAge(arr) {
    let sumAge = 0;
    for (let user of arr) {
        sumAge += user.age;
    }
    return (sumAge / arr.length);
}


function getAverageAge2(arr2) {
    return (arr2.reduce((sum, user) => sum + user.age, 0) / arr2.length);
}



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
alert(getAverageAge2(arr)); // (25 + 30 + 29) / 3 = 28