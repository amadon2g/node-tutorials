function makeUpperCase(value) {
    console.log(value.toUpperCase())
}

//makeUpperCase('peter')

function handleName(name, cb) {
    fullName = `${name} smith`
    cb(fullName)
}


handleName('peter', makeUpperCase)

//array methods, setTimeout, event listener
// call back hell ... callback in callback in callback.......