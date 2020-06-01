const express = require('express');
const router = express.Router();
const controllers = require('@User/controllers');
const middleware = require('@middleware');

const middlewares = {
  getOnlineUsers: [middleware.isAuthenticated]
}

router.get('/get-online-users', middlewares.getOnlineUsers, controllers.getOnlineUsers);

router.get('/', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

module.exports = router
