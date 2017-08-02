const express = require('express');
const bodyParser = require('body-parser');
const Iamport = require('iamport');

const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let config;
try {
  config = require('./config');
} catch (err) {
  console.log(err);
}

const argv = config || require('minimist')(process.argv.slice(2));

console.dir(argv);

const iamport = new Iamport({
  impKey: argv[ 'apiKey' ],
  impSecret: argv[ 'secretKey' ],
});

app.post('/subscribe/payments/onetime', (req, res) => {
  iamport.subscribe.onetime(req.body).then(result => {
    res.send({
      status: 'success',
      message: result.message,
    });
  }).catch(err => {
    res.send({
      status: 'error',
      message: err.message,
    });
  });
});

app.post('/payments/cancel', (req, res) => {
  iamport.payment.cancel(req.body).then(result => {
    res.send({
      status: 'success',
      message: result.message,
    });
  }).catch(err => {
    res.send({
      status: 'error',
      message: err.message,
    });
  });
});

app.listen(process.env.PORT || 8080);