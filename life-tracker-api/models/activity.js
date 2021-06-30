const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Activity {
  static async listActivitiesForUser({ user }) {
    // console.log(user);
    
    const results = await db.query(
      `
    SELECT a.id AS "activityId",
    a.activity_type AS "activityType",
    a.exercise_id AS "exerciseId",
    a.nutrition_id AS "nutritionId",
    a.sleep_id AS "sleepId"
    FROM activity AS a
    JOIN exercises AS e ON e.id = a.exercise_id
    JOIN nutrition AS n ON n.id = a.nutrition_id
    JOIN sleep AS s ON s.id = a.sleep_id
    JOIN users AS u ON u.id = a.user_id
    WHERE u.id = (SELECT id FROM users WHERE email = $1)
    `,
      [user.email]
    );

    return results.rows;
  }
  static async createActivity({ activity, user }) {
    if (!activity || !Object.keys(activity).length) {
      throw new BadRequestError("No activity info provided");
    }
    if (!user) {
      throw new BadRequestError("No user provided");
    }
    // console.log("here")
    const results = await db.query(
      `
            INSERT INTO activity (activity_type, user_id)
            VALUES ($1, (SELECT id FROM users WHERE email = $2))
            RETURNING id,
            user_id AS "userId",
            timestamp
            `,
      [
        // userId,
        activity.activity_type,
        user.email,
      ]
    );
    // console.log("there")
    return results.rows[0];
  }
}

module.exports = Activity;
