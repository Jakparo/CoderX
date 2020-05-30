const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

let userRoute = require('./routes/user.route');
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { name:'Nam'});
});

app.use('/users', userRoute);


app.listen(port, () => console.log(`Server listening on port ${port}!`));