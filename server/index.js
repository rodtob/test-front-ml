const express = require("express");

const path = require('path');


var cors = require('cors')

const app = express();

const PORT = process.env.PORT || 5000;

let apiRouter = require('./routes/items')

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors())

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

