const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
  const userInfo = {
    name: "Ignacio",
    lastName: "Consuegra",
    age: 20,
  };
  res.json(userInfo);
});

app.listen(port, () => {
  console.log(`Sever on port :${port}`);
});
