const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    resp.send('I am proud to work for MediaMath!')
})

app.listen(3000);