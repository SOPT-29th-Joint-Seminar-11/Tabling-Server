const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getLikeCount = async (client, cafeID) => {
    const { rows } = await client.query(
        `
        SELECT count FROM "like"
        WHERE restaurant_id = $1
        `,
        [cafeID],
    );
    return convertSnakeToCamel.keysToCamel(rows[0])
}

module.exports = { getLikeCount }