const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
var http = require('http');
const axios = require('axios');

const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/1";


var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log('Server started!')
});

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.route('/teste').get((req, res) => {
  res.send({
    status: 200,
    message: 'OK!'
  });
});


app.route('/getAccessToken').get((req, res) => {
  console.log('getAccessToken');

  /*/!*const login = 'matheuszanetti@desafiofluig.com';
    const senha = 'MatheusZanet@123';*!/
  let headers;
  headers = this.httpHeadersTemplate.append('Content-Type', 'application/json');
  headers = this.httpHeadersTemplate.append('Authorization', 'Basic ZGVtbzpzU2R4T1lEQU0zRkJO');
  /!*const endpoint = `https://accounts.homolog.fluig.io/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=`
    + login + `&password=` + senha ;*!/
  /!*
      const endpoint = `/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=matheuszanetti@desafiofluig.com&password=MatheusZanet@123/`;

  *!/*/


  let payload = '';
  const getData = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      payload = json;

      res.send({
        status: 200,
        message: 'OK!',
        body: payload
      });

    } catch (error) {
      console.log(error);
    }
  };
  getData(url);

});
