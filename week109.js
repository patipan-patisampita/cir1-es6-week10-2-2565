//function
function greet(name, callback) {
    console.log(name)
    callback()

}
//callback fuction
function callMe() {
    console.log('I am callback function')
}
//passing functions as an arguments
greet('Peter', callMe)