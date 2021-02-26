const express = require("express");

var cors = require('cors')

const app = express();

const PORT = process.env.PORT || 5000;

let apiRouter = require('./routes/items')

app.use(cors())

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

