import express from 'express'

const PORT = 5000

const app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

// ROTAS


// SIGN-UP
let users = []

app.post("/sign-up", (request, response) => {
    const user = request.body

    users.push(user)

    response.send("OK")
})


// TWEETS
let tweets = []

app.post("/tweets", (request, response) => {
    const tweet = request.body

    tweets.push(tweet)
    
    response.send("OK")
})


app.get("/tweets", (request, response) => {

    const lastTweets = tweets.map(tweet => {
        const user = users.find(user => tweet.username == user.username)
        if (user)
            return {...tweet, avatar: user.avatar}
    }).reverse().slice(0, 10)

    response.send(lastTweets)
})





