var express = require('express');
var axios = require('axios');
var router = express.Router();

const { TWITTER_API_PATH } = require('../config');

/* GET tweets */
router.get('/', async function(req, res, next) {
  try {
    const { data } = await axios({
      url: `${TWITTER_API_PATH}/search/tweets.json`,
      method: 'get',
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
