const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Se ejecuto el resolve");
        }else{
            reject("Se ejecuto el reject");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));