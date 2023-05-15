const {readFile, writeFile} = require('fs')

readFile('C:/Users/Amadon/Desktop/node tutorial/content/first.txt','utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }

    let first = result;
    readFile('C:/Users/Amadon/Desktop/node tutorial/content/second.txt','utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }  

        let second = result

        writeFile('C:/Users/Amadon/Desktop/node tutorial/content/result2.txt',
        `Here is the result ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log(err)
                return
            }  

            console.log('write successful');
        })
    })
})
