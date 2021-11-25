const express = require('express');
const router = express.Router();

router.use('/cafe-detail', require('./cafeDetail'));
router.use('/home', require('./home'));
router.use('/cafe-detail', require('./cafe-detail'));

module.exports = router;