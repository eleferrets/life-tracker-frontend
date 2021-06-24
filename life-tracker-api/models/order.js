const db = require("../db")
const { post } = require("../routes/orders")
const {BadRequestError, NotFoundError} = require("../utils/errors")

class Order {
    static async listOrdersForUser(user) {
        // return all orders that the authenticated user has created
        const results = await db.query(
            `
            SELECT o.id AS orderId,
            o.image_url AS "imageUrl",
        o.customer_id AS "customerId",
            u.email AS "userEmail"
            od.quantity AS "quantity",
            p.name AS "name"
            p.price AS "price",
            FROM orders AS o
            JOIN users AS u ON u.id = o.customer_id
            JOIN order_details AS od ON o.id = od.order_id
            JOIN products AS p ON p.id = od.product_id
            WHERE o.customer_id = u.id`
        )

        return results.rows
    }
    static async createOrder({order, user}) {
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

        const results = await db.query(
            `
            INSERT INTO orders (customer_id)
            VALUES ($1, (SELECT id FROM users WHERE email = $3))
            RETURNING id,
            user_id AS "userId",
            created_at AS "createdAt",
            updated_at AS "updatedAt"
            `, [orderId, user.email]
        )
        return results.rows[0]
    }
    // static async createOrder({rating, user, postId}) {
    //     // check if user has added rating to this post
    //     // throw an error if they have
    //     // else insert the record into the db
    // }
}

module.exports = Order