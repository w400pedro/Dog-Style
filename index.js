// a URL /dogs leva pro CRUD central de cachorros
// a URL /user leva pro perfil do usuario logado
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/view');

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

const userroutes = require('./routes/user-routes');
app.use('/user', userroutes);

app.use('*', (req, res) => {
    return res.status(404).send(`
        <h1>Sorry, not found!!!</h1>
        <a href="/dogs">VOLTAR</a>
    `);
})

const port = process.env.PORT; 
app.listen(port, () => console.log('Server iniciado na porta '+port));
