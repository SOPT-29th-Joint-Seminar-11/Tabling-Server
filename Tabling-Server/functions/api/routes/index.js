const express = require('express');
const router = express.Router();

// 이런 식으로 router 경로 쓰면 됩니다
// router.use('/user', require('./user'));
router.use('/home', require('./home'));
router.use('/cafe-detail', require('./cafe-detail'));

module.exports = router;