var path = require('path');
const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
var exphbs  = require('express-handlebars');
const helpers = require("./resources/lib/helpers");
const route = require('./routes')


app.use(express.static(path.join(__dirname,'/public')));

// middleware express
app.use(express.urlencoded());
app.use(express.json());

// HTTP logger
app.use(morgan('combined'))

// Template engine

// app.engine('.hbs', exphbs({
//   extname: '.hbs',
// }));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resoues\\views'));

// Template engine
app.set('views', path.join(__dirname, 'resources/views'));
app.engine('.hbs', exphbs({
        defaultLayout: 'main', 
        helpers      : helpers,
        extname: '.hbs',
        layoutsDir:'src/resources/views/layouts',
        partialsDir:['src/resources/views/partials', 'src/resources/views/templates'],
}));
app.set('view engine', '.hbs');
//end Template engine
  // app.get('/news', function (req, res) {
  //   res.render('news');
  // });
//routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})