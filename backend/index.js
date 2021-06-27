const express = require("express");
const app = express();
const port = 5000;


app.get("/", async (req, res) => {
    res.send('Bonjour')
  });

app.post('/api', function(req, res) {
    res.send(req.payload); // the posted data
});

app.listen(port, () => {
    console.log('server is live now');
})

