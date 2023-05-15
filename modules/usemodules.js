const names = require('./moduledata');
const greet = require('./modules')
const data = require('./moremodules')

console.log(names)

greet('susan')
greet(names.john)
greet(names.peter)
greet(data.singlePerson.name)