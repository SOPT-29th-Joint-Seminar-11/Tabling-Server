const express = require('express');
const router = express.Router();

router.use('/:cafeId/reserve', require('./cafeReservePOST'));

module.exports = router;