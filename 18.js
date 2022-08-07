let user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

for (let key in user) {
    if (typeof (user[key]) == "object") {
        clone[key] = Object.assign({}, user[key]);
    }
}

user.sizes.width++;       // меняем свойство в одном объекте
alert(user.sizes.width);
alert("New - " + clone.sizes.width);