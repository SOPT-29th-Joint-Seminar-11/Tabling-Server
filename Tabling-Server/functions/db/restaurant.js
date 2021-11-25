const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllCafes = async(client)=>{
    const{rows} = await client.query(
        `
        SELECT
        title_image, name, rating, review_count, 
        group_type, location, reserve_flag, lineup_flag
        FROM "restaurant" r
        `,
    );
    return convertSnakeToCamel.keysToCamel(rows);
}

const getCafeInfo = async (client, cafeID) => {
    const {rows} = await client.query(
        `
        SELECT images, waiting_count, distance, name, address, rating, review_count, description, like_flag, like_count FROM restaurant r
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

module.exports = { getAllCafes, getCafeInfo, getCafeDetail }