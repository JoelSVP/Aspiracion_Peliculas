var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { getFirestore, collection, getDocs } = require('firebase/firestore');
var firebaseApp = require('./public/javascripts/firebase');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const { log } = require('console');
var router = express.Router();

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = getFirestore(firebaseApp);


app.get('/api/peliculas', async (req, res) => {
    const filmCollection = collection(db, 'Películas');
    const snapshot = await getDocs(filmCollection);
    const filmList = snapshot.docs.map(doc => doc.data());
    res.json(filmList);
})



app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
