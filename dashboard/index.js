const express = require('express')

const app = express()

app.set('views', require('path').join(__dirname, '/views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index', {
	something: 'testing 321 123',
	subtitle: 'testing 321 123'
}))

const { log } = require('../lib')
const port = process.env.PORT || 3000
app.listen(port, () => log(2, `[Website] Website started on port ${port}.`))

// use this by command prompt, cd to dashboard file and type: node server.js
