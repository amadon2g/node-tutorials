const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received for user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`another response`)
})

customEmitter.emit('response', 'Ahmad', 34) 