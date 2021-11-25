const express = require('express');
const router = express.Router();

router.get('/cafe', require('./cafeListGET'));

module.exports = router;