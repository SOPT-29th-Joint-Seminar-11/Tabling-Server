const express = require('express');
const router = express.Router();

router.use('/cafe', require('./cafeListGET'));

module.exports = router;