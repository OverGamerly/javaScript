class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hi!');
    }
}

const user1 = new User('Masha', 12);

console.log(user1);

const user2 = {
    name: "Petya",
    age: 76
}