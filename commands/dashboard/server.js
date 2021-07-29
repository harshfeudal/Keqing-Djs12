const express = require('express');

const app = express();

app.get('/', (req, res) => res.send(`<h1>Heading 1</h1>`));
 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is live on port ${port}`));