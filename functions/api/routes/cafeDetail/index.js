const express = require('express');
const router = express.Router();

router.get('/:cafeID', require('./cafeDetailGET'));

module.exports = router;