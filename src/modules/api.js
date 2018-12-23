const express = require('express');
const axios = require('axios');
const app = express();

app.post('/api/search/', async function (req, res) {
  const { body } = req;
  const result = await axios({
    url: `http://omdbapi.com/?apikey=1977b733&s=${body.search}`,
    method: 'get'
  });
  if(result.data.Response === 'True') {
    res.json({
      success: true,
      data: result.data.Search
    })
  } else {
    res.json({
      success: false,
      data: result.data.Error
    })
  }
});

app.post('/api/search_id/', async function(req, res){
  const { body } = req;
  const result = await axios({
    url: `http://www.omdbapi.com/?apikey=1977b733&i=${body.id}&plot=full`,
    method: 'get'
  });
  if(result.data.Response === 'True') {
    res.json({
      success: true,
      data: result.data
    })
  } else {
    res.json({
      success: false,
      data: result.data.Error
    })
  }
});

module.exports = app;