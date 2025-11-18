let user = { name: "John", email: "john@mail.com", age: 21 };

function updateUser(field, value) {
    user[field] = value;
}

updateUser("name", "Rahul");
updateUser("email", "rahul@mail.com");
updateUser("age", 25);

console.log(user);
