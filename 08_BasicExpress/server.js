const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.static('public'));

app.post('/calc-bmi', (req, res) => {
  const Weight = parseFloat(req.body.Weight);
  const Height = parseFloat(req.body.Height);
  const BMI = (Weight / (Height ** 2)) * 10000;
  res.send(`Your BMI is: ${bmi}`);
});