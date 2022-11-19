const MainClient = require("./bott");
const client = new MainClient();

client.connect()

module.exports = client;


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Power By DarkUptime'));

app.listen(port, () =>
  console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
);
