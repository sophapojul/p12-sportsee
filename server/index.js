const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));

const {
  getUserById,
  getUserActivityById,
  getUserAverageSession,
  getUserPerformance,
} = require('./models');

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const userData = getUserById(Number(userId));
  res.send({ data: userData });
});

app.get('/user/:id/activity', (req, res) => {
  const userId = req.params.id;
  const userData = getUserActivityById(Number(userId));

  res.send({ data: userData });
});

app.get('/user/:id/average-sessions', (req, res) => {
  const userId = req.params.id;
  const userData = getUserAverageSession(Number(userId));

  res.send({ data: userData });
});

app.get('/user/:id/performance', (req, res) => {
  const userId = req.params.id;
  const userData = getUserPerformance(Number(userId));

  res.send({ data: userData });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
