const express = require('express')
const app = express()
const port = 8080
const name = process.env.NAME;

app.use((req, res) => {
    const log = [`[${name}]`, req.method, req.url, JSON.stringify(req.headers, null, 2).replaceAll('"', '')].join(' ');
    console.log(log);
    res.send(log);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})