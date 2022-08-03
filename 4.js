let login = prompt("Кто там?");
if (login == "Админ") {
    let pass = prompt("Пароль?");
    if (pass == "Я главный") {
        alert("Здравствуйте!");
    } else if (pass) {
        alert("Неверный пароль");
    } else {
        alert("Отменено");
    }
} else if (login) {
    alert("Я вас не знаю");
} else {
    alert("Отменено");
}