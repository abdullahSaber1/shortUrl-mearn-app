const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const errorHandler = require('./middleware/errorHandler');
const shortUrlRouter = require('./router/v1/shortUrlRouter');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

//corsOrigin
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use('/api/v1/shortlinks', shortUrlRouter);

app.all('*', (req, res) => {
  res.json({
    status: 'Failure',
    message: 'wrong url',
  });
});

// global error Handler
app.use(errorHandler);

module.exports = app;
