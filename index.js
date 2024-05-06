var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const engineLocals = require('ejs-blocks')
var db = require('./config/db')
const bodyParser = require('body-parser');
const session = require('express-session');
const Cart = require('./model/Site/cart')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var flash = require('express-flash');
const cron = require('node-cron');
var cachegoose = require('recachegoose');
var mongoose  = require('mongoose');
const favicon = require('express-favicon');
var cors = require('cors')
var helmet  = require('helmet')
const http = require('http');
var MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config();
var app = express();




// app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));


var store = new MongoDBStore({
  uri: 'mongodb+srv://farooq123:farooq123@cluster0.ijdh8yd.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0',
  collection: 'mySessions'
});


// io.on('connection', (socket) => {
//     console.log('Client connected');
  
//     socket.on('disconnect', () => {
//       console.log('Client disconnected');
//     });
//   });



const deleteCollection = async () => {
  try {
      // Delete the collection
      await Cart.deleteMany();
      console.log('Collection deleted successfully.');
  } catch (error) {
      console.error('Error deleting collection:', error);
  } finally {
      // Close the MongoDB connection
      mongoose.connection.close();
  }
};


cron.schedule('0 12 * * *', () => {

  deleteCollection();
}, {
  timezone: 'Asia/Karachi' 
});


cachegoose(mongoose, {
  engine: 'file'
});


app.use(require('express-session')({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));
// backup({
//   uri: 'mongodb+srv://farooq123:farooq123@cluster0.ijdh8yd.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0', // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
//   root: __dirname
// });


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.engine('ejs', engineLocals);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/Seller/fonts', express.static(path.join(__dirname, 'assets', 'Seller', 'fonts')));
app.use(favicon(__dirname + '/public/frontend/images/logo.png'));


app.use(flash());


app.use((req, res, next) => {
  res.locals.baseUrl = 'http://localhost:3100/';
  // res.locals.baseUrl = 'https://gleaming-dog-flannel-shirt.cyclic.app/';
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/', require('./routes/backend/auth'))
app.use('/api/', require('./routes/backend/product'))
app.use('/api/', require('./routes/backend/order'))
app.use('/api/', require('./routes/backend/store'))
app.use('/api/', require('./routes/backend/ship-address'))
app.use('/api/', require('./routes/backend/artist'))
app.use('/api/', require('./routes/backend/album'))
app.use('/api/', require('./routes/backend/cart'))
app.use('/api/', require('./routes/backend/logout'))
app.use('/api/', require('./routes/Site/index'))
app.use('/api/', require('./routes/Image'))
app.use('/api/', require('./routes/backend/productMainCategory'))
app.use('/api/', require('./routes/backend/ProductMockup'))
app.use('/api/', require('./routes/backend/productStore'))
app.use('/api/', require('./routes/backend/storinfo'))
app.use('/api/', require('./routes/backend/bankAccount'))
app.use('/api/', require('./routes/Site/cart'))
app.use('/api/', require('./routes/Site/checkout'))
app.use('/api/', require('./routes/Site/whishList'))
app.use('/api/', require('./routes/Pages/about'))
app.use('/api/', require('./routes/Site/extra'))
app.use(require('./routes/Image'))
app.use(require('./routes/Image'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







module.exports = app