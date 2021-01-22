// https://developer.twitter.com/en/docs/basics/authentication/oauth-2-0/application-only

var express = require('express');
var axios = require('axios');
var router = express.Router();

const { TWITTER_OAUTH_API_PATH } = require('../config');

/* GET bearer token */
router.get('/', async function (req, res, next) {
  const credentials = `${process.env.CONSUMER_API_KEY}:${process.env.CONSUMER_API_KEY_SECRET}`;
  const credentialsBase64Encoded = new Buffer(credentials).toString('base64');
  try {
    const { data } = await axios({
      url: `${TWITTER_OAUTH_API_PATH}/token`,
      method: 'post',
      headers: {
        Authorization: `Basic ${credentialsBase64Encoded}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      data: 'grant_type=client_credentials',
    });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
