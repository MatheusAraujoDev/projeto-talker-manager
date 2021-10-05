const express = require('express');
const bodyParser = require('body-parser');

const talkerRouter = require('./routes/talkerRouter');
const TalkerIdRouter = require('./routes/talkerIdRouter');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// requisito 01
app.use('/talker', talkerRouter);

// Requisito 02
app.use('/talker/:id', TalkerIdRouter);

app.listen(PORT, () => {
  console.log('Online');
});
