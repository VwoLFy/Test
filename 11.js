function showMessage(mess = defMess()) {
    alert(mess);
}

function defMess() {
    mess += " No ";
    return mess;
}


let mess = "I am"
showMessage();
showMessage(mess+" DA!");