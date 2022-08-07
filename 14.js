let user = {};
user.name = "John";
user.surname = "Smith";
alert ( user.name );
user.name = "Pete";
for (let key in user) {
    alert ( key + " - " + user[key] )
}
delete user.name;
alert ( user.name );
for (let key in user) {
    alert ( key + " - " + user[key] )
}