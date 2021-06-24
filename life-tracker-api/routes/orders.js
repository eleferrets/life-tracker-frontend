const express = require("express");
const Order = require("../models/order");
const security = require("../middleware/security")
const router = express.Router();

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // Create a new order
    // Call the createOrder method
    const {user} = res.locals
    const order = await Order.createOrder({user, order: req.body})
    return res.status(201).json({order})
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    // List all orders
    // call the listOrdersForUser from the Order model
    const orders = await Order.listOrdersForUser()
    return res.status(200).json({orders})
  } catch (err) {
    next(err);
  }
});

module.exports = router;
