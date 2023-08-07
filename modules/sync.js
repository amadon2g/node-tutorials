const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('C:/Users/Amadon/Desktop/node tutorial/content/first.txt','utf8')
const second = readFileSync('C:/Users/Amadon/Desktop/node tutorial/content/second.txt','utf8')


//console.log(first,second)

writeFileSync(
    'C:/Users/Amadon/Desktop/node tutorial/content/result.txt',
    `Here is the result ${first}, ${second}`,
    {flag: 'a'}//append to file use flag "a"
    )