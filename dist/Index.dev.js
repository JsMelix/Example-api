"use strict";

var axios = require('axios');

var url = 'https://xkcd.com/info.0.json';
axios.get(url).then(function (res) {
  return console.log(res.data);
})["catch"](function (err) {
  return console.log(err);
});