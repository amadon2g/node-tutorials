//Promises - avoid callback hell

// async awwait
// consume/use promise

//pending, rejected, fulfilled 

const value =  2

const promise = new Promise((resolve, reject) => {
    Math.floor(Math.random * 3) == value 
    ? resolve('Tahts correct') 
    :reject('Wrong number')
})
console.log(promise);

promise.then((data) => console.log(data)).catch((err) => console.log(err))