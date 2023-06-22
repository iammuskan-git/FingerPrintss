const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ejs = require('ejs');
const path = require('path');


const port = 3004;

const app = express();

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/static',express.static('./public/'));

app.use(express.json());

app.use(session({
    secret: 'my secret key',
    saveUninitialized: true,
    resave: false,
})
);
app.use((req, res, next) => {
    res.locals.message= req.session.message;
    delete req.session.message;
    next();
});

app.use(express.static('uploads'));

//set template engine
app.set('view engine', 'ejs');


app.get('/', (req,res) => {
    res.render('login');
})
app.get('/dashboard', (req,res) => {
    res.render('index',{
        title: 'dashboard'
    });
});
//route prefix
app.use("", require('./routes/isgivenvoteRoutes'));
app.use("", require('./routes/partyRoutes'));
app.use("", require('./routes/candidateRoutes'));
app.use("", require('./routes/voterRoutes'));
app.use("", require('./routes/votingRoutes'));






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})