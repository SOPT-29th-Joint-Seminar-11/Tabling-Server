const express = require('express');
const router = express.Router();

router.use('/cafe-detail', require('./cafeDetail'));

module.exports = router;