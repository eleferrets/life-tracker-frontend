const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Sleep {
  static async listSleepsForUser({ user }) {
    
    const results = await db.query(
      `
    SELECT s.id AS "sleepId",
    s.start_time AS "startTime",
    s.end_time AS "endTime",
    u.email AS "userEmail"
    FROM sleep AS s
    JOIN users AS u ON u.id = s.user_id
    WHERE u.id = (SELECT id FROM users WHERE email = $1)
    `,
      [user.email]
    );

    return results.rows;
  }
  static async createSleep({ sleep, user }) {
    if (!sleep || !Object.keys(sleep).length) {
      throw new BadRequestError("No sleep info provided");
    }
    if (!user) {
      throw new BadRequestError("No user provided");
    }
    const results = await db.query(
      `
            INSERT INTO sleep (start_time, end_time, user_id)
            VALUES ($1, $2, (SELECT id FROM users WHERE email = $3))
            RETURNING id,
            user_id AS "userId",
            timestamp
            `,
      [
        // userId,
        sleep.start_time,
        sleep.end_time,
        user.email,
      ]
    );
    return results.rows[0];
  }
}

module.exports = Sleep;
