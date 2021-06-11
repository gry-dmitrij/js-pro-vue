const express = require('express');
const fs = require('fs');
const app = express();
const cartRouter = require('./cart-router');

app.use(express.json());
app.use('/', express.static('../../front/project-js-pro/dist'));
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
    fs.readFile('./db/products.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});