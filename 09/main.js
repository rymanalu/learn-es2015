class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static register(username, email) {
        return new User(username, email);
    }

    get foo() {
        return this.cau;
    }

    set foo(value) {
        this.cau = value;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

let user1 = new User('rymanalu', 'rymanalu@gmail.com');
console.log(user1);
user1.changeEmail('roni.y@example.com');
console.log(user1);
user1.foo = 'yeah';
console.log(user1.foo);

function log(strategy) {
    strategy.handle();
}

log(new class {
    handle() {
        console.log('handled');
    }
});
