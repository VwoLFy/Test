let isEmpty = prop => {
    let noKey = true;
    for (let key in prop) noKey = false;
    return noKey;
};

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false