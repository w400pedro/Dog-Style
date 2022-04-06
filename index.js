
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './view');

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

const session = require('express-session');
app.use(session({
    secret: 'chave secreta de criptografia',
    resave: false, 
    saveUninitialized: false,
    cookie: { secure: false }
}))

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/dogs');
});

const dogroutes = require('./routes/dog-routes');
app.use('/dogs', dogroutes);

app.listen(3000, function () { console.log("entrou") });

//Duvidas pra perguntar pro prof hiihihih. Precisa fazer um sistema de cadastro/login? pode usar banco? 