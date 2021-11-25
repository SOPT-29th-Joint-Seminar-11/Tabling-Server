const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { reservationDB } = require('../../../db');

module.exports = async (req, res) => {
    const {cafeId} = req.params;
   let client;

  try {
    client = await db.connect(req);
    const newCafe = await reservationDB.reserveCafe(client, cafeId);

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.RESERVE_CAFE_SUCCESS, newCafe));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};