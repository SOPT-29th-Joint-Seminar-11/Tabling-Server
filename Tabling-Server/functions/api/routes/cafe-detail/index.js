const express = require('express');
const router = express.Router();

router.post('/:cafeId/reserve', require('./cafeReservePOST'));

module.exports = router;