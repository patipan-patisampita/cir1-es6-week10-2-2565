//Annonymous function
const multple = function (a, b) {
    return { a, b } //return object
}

const { a, b } = multple(20, 10)
console.log(a * b)