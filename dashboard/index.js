const express = require('express')

const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index', {
	something: 'testing 321 123'
  }));

app.get('/', (req, res) => res.render('index', {
	subtitle: 'testing 321 123'
  }));

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`[Website] Server is live on port ${port}`))

// use this by command prompt, cd to dashboard file and type: node server.js
