const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

  const reserveCafe = async (client, cafeId) => {
    const {rows} = await client.query(
        `
        UPDATE "reservation" r
        SET flag =
        CASE WHEN flag = FALSE
            THEN TRUE
            ELSE FALSE
        END
        , updated_at = now()
        WHERE id=$1
        RETURNING *;
        `,
        [cafeId],
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
  };
  module.exports = {reserveCafe};
  