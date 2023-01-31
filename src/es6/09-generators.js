function* iterate(array) {
    for (let value of array){
        yield value;
    }
}

const it = iterate(["Enzo", "David", "Salomon", "Roberto"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);