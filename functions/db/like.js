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

const likeCafe = async (client, cafeID) => {
    const { rows } = await client.query(
        `
        UPDATE "like" l
        SET flag =
        CASE WHEN flag = FALSE
            THEN TRUE
            ELSE FALSE
        END
        , count =
        CASE WHEN flag = FALSE
            THEN count + 1
            ELSE count - 1
        END
        , updated_at = now()
        WHERE id = $1
        RETURNING *;
        `,
        [cafeID],
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getLikeCount, likeCafe }
