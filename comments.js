
//creat a web server 
const express = require('express');
const app = express();
const port = 3000;

//use the public folder as the root folder
app.use(express.static('public'));

//use the views folder as the root folder for the views
app.set('views', './views');
app.set('view engine', 'ejs');

//define the main route
app.get('/', (req, res) => {
  res.render('home');
});

//start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 