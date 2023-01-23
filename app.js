const express = require('express');
const path = require('path');
const app = express();
//const publicPath = path.resolve(__dirname, './public');

app.use(express.static('public'));

app.listen(3005, function () {
    console.log('Srvidor corriendo');
})

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})