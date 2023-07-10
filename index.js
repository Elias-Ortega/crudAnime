const express = require('express');

const app = express();

//motor de plantillas
app.set('view engine', 'hbs');

//carpeta para recuros estaticos
app.use(express.static('public'));


app.get('/',  (req, res) => {
  res.render('index');
})

app.listen(8080);