const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getCafeInfo = async (client, cafeID) => {
    const {rows} = await client.query(
        `
        SELECT images, waiting_count, distance, name, address, rating, review_count, description, like_count FROM restaurant r
        WHERE id = $1
        `,
        [cafeID],
    );
    return convertSnakeToCamel.keysToCamel(rows[0])
}

const getCafeDetail = async (client, cafeID) => {
    const {rows} = await client.query(
        `
        SELECT tags, pet, wifi, parking FROM restaurant r
        WHERE id = $1
        `,
        [cafeID],
    );
    return convertSnakeToCamel.keysToCamel(rows[0])
}

module.exports = { getCafeInfo, getCafeDetail }