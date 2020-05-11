const express = require('express')
const http = require('http')
const mysql = require('mysql')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser');
const myConnection = require('express-myconnection');
const app = express()
const port = process.env.PORT || 5000;


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(bodyParser.text({
  defaultCharset: 'utf-8'
}));


/* var corsOptions = {
  origin: 'http://127.0.0.1:5500/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
} */


//app.get('/', (req, res) => res.send('Hello World!'))


/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(cors()) */


//var cor2 = require('./cors');
//app.use(cor2.permission);


app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, multipart/form-data");
  next();
});


//const bodyParser = require('body-parser');
//app.use(bodyParser.json()); // support json encoded bodies
//app.use(bodyParser.urlencoded());
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Require body-parser (to receive post data from clients)
//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
//app.use(bodyParser.json())


//app.use(express.static('./'));

//app.use(express.static(__dirname + '/dist/e-stock'));
//app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.use(express.static(path.join(__dirname, '/dist/e-stock')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/dist/e-stock/index.html')));

/* app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/e-stock/index.html'));
}); */

const server = http.createServer(app);
server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));