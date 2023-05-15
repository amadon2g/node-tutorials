//Modules encapsulate code
//CommonJS, every file is a module

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

//export default
module.exports = sayHi