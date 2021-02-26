const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();


let apiRouter = require('./routes/items')

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

