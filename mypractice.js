const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' },
  ]
  
  const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
  ]

//   const getData = async () => {
//     try {
//         const user = await getUser('johnny')
//         const articles = await getArticles(user.id)
//         console.log(articles)
//       } catch (error) {
//         console.log(error)
//       }
//   }

function getData() {
    getUser('susana')
    .then((user) => getArticles(user.id))
    .then((articles) => console.log(articles))
    .catch((err) => console.log(err))
}

  getData()

  function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name)

        if(user) {
            return resolve(user)
        } else {
            reject (`user, ${name} not found`)
        }
    })
  }
  const getArticles = (userId) => {
    return new Promise((resolve, reject) => {
        const article = articles.find((artic) => userId === artic.userId)

        if(article) {
            resolve(article.articles)
        } else {
            reject `Nada`
        }
    })
  }