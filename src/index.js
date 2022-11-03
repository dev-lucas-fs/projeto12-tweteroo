import express from 'express'

const PORT = 5000

const app = express()

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

// ROTAS


// SIGN-UP
let user = []

app.post("/sign-up", (request, response) => {
    const user = request.body

    user.push(user)

    response.send("OK")
})




