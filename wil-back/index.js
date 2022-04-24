const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;

connString = "mongodb+srv://zhsprojects:XY0g7pdX95Bib9w1@cluster0.xyjjr.mongodb.net/sample_mflix?retryWrites=true&w=majority";

mongoose.connect(connString, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(function(result) {
    console.log('Database is connected')
  })
  .catch(err => {
    console.log(err);
  });

app.use(cors());

app.get('/', (req, res) => res.send('Welcome, boilerplate here we come'));

app.listen(PORT, () => console.log(`Server Running: https://localhost:${PORT}`));

app.use(bodyParser.json());
