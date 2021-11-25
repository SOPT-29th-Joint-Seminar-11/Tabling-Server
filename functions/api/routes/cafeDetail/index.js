const express = require('express');
const router = express.Router();

router.get('/:cafeID', require('./cafeDetailGET'));
router.post('/:cafeID/like', require('./likePOST'));

module.exports = router;