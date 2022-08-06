// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);