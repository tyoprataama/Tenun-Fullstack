const router = require('express').Router();

router.get('/usertest', (request, response) => {
  response.send('user test is successful');
});

router.post('/userposttest', (request, response) => {
  const { username } = request.body.username;
  response.send(`Your user name is ${username}`);
});

module.exports = router;
