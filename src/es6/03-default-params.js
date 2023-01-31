function newUser(name,age,country) {
    var name = name || "Oscar";
    var age = age || 34;
    var country = country || "Mexico"
    console.log(name,age,country);
}

newUser();
newUser("Enzo", 23, "Argentina");

function newAdmin (name = "Enzo", age = 23, country = "Arg") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("Julieta", 24, "Bernal");