// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(munuO) {
    for (let key in munuO) {
        typeof (munuO[key]) == "number" ? munuO[key] *= 2 : 0;
    }
}

  // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };