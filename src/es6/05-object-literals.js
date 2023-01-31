//enahcced object literals

function newUser (user, age, country, uId) {
    return{
        user,
        age,
        country, //Asi en Ecma6
        id: uId //asi en Ecma5
    }
}

console.log(newUser("gndx", 34, "mx", 1));

