const express = require(`express`);
const cors = require(`cors`);
const data = require(`./data.json`);
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.get(`/api`, (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listen at ${port}`);
});
