
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './view');


app.get('/', (req, res) => {
    res.redirect('/dogs');
});

const dogroutes = require('./routes/dog-routes');
app.use('/dogs', dogroutes);



//cancer foi?


app.listen(3000, function () { console.log("entrou") });