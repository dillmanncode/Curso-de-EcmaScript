// Declarando
class User {};
// Instanciando
const newUser = new User();

class user {
    // metodos
    greeting() {
        return "Hello";
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor
class user {
    // Constructor
    constructor () {
        console.log("Nuevo usuario");;
    }
    greeting() {
        return "Hello";
    }
}

const david = new user();

// this
class user {
    // Constructor
    constructor (name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const enzo = new user ("Enzo");
console.log(enzo.greeting());

// Getters and setters
class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);