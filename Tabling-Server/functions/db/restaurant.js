const _ = require('lodash');
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

  module.exports = { getAllCafes};
  