const express = require('express')

const app = express()

app.set('views', require('path').join(__dirname, '/views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'))

app.get('/', (req, res) => res.send('<h1>Hi!</h1>'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is live on port ${port}`))

// use this by command prompt, cd to dashboard file and type: node server.js
