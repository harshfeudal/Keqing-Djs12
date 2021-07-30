const express = require('express')

const app = express()

app.set('views', require('path').join(__dirname, '/views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.status(200)
	res.render('index')
	res.send('<h1>Hi!</h1>')
	res.end()
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`[Website] Server is live on port ${port}`))

// use this by command prompt, cd to dashboard file and type: node server.js
