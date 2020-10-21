const newsRouter = require('./news')
const siteRouter = require('./site')


function route(app){
  

app.use('/news',newsRouter)
app.use('/',siteRouter)



// app.get('/', function (req, res) {
//     res.render('home');
//   });
  // app.get('/news', function (req, res) {
  //   res.render('news');
  // });
//   app.get('/search', function (req, res) {
//     console.log(req.query)
//     res.render('search');
//   });
//   app.post('/search', function (req, res) {
//     console.log('------------')
//     console.log(req.body)
//       console.log('------------')
//     res.render('search');
//   });
}
module.exports= route;