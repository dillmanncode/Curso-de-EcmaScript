const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Se ejecuto el resolve");
        }else{
            reject("Se ejecuto el reject");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log("Finally"));