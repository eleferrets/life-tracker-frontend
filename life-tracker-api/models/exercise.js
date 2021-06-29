const db = require("../db");
/* const { post } = require("../routes/exercises"); */
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Exercise {
  static async listExercisesForUser() {
    // return all exercises that the authenticated user has created
    //console.log("Here")
    // const results = await db.query(
    //   `
    //         SELECT e.id AS "exerciseId",
    //         e.name AS "name",
    //     e.category AS "category",
    //         u.email AS "userEmail",
    //         e.duration AS "duration",
    //         e.intensity AS "intensity"
    //         FROM exercises AS e
    //         JOIN users AS u ON u.id = e.user_id
    //         `
    // );
    const results = await db.query(`
    SELECT e.id AS "exerciseId",
    e.name AS "name",
    e.category AS "category",
    e.duration AS "duration",
    e.intensity AS "intensity",
    u.email AS "userEmail"
    FROM exercises AS e
    JOIN users AS u ON u.id = e.user_id

    `);
//console.log("there")
    return results.rows;
  }
  static async createExercise({ exercise, user }) {
    // check if user has added rating to this post
    // throw an error if they have
    // else insert the record into the db
    // const requiredFields = ["caption", "imageUrl"]
    // requiredFields.forEach(field => {
    //     if (!post.hasOwnProperty(field)) {
    //         throw new BadRequestError(`Required field - ${field} - missing from request body.`)
    //     }
    // })

    // if (post.caption.length > 140) {
    //     throw new BadRequestError(`Post caption must be 140 characters or less.`)
    // }
    // caption,
    //     image_url AS "imageUrl",
    if (!exercise || !Object.keys(exercise).length) {
      throw new BadRequestError("No exercise info provided");
    }
    if (!user) {
      throw new BadRequestError("No user provided");
    }
    const results = await db.query(
      `
            INSERT INTO exercises (name, category, duration, intensity, user_id)
            VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE email = $5))
            RETURNING id,
            user_id AS "userId",
            timestamp
            `,
      [
        // userId,
        exercise.name,
        exercise.category,
        exercise.duration,
        exercise.intensity,
        user.email,
      ]
    );
    return results.rows[0];
  }
  // static async createOrder({rating, user, postId}) {
  //     // check if user has added rating to this post
  //     // throw an error if they have
  //     // else insert the record into the db
  // }
}

module.exports = Exercise;
