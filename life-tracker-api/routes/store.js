const express = require("express");
const Store = require("../models/store");
const router = express.Router();

// router.post("/", async (req, res, next) => {
//   try {
//     // Create a new post
//   } catch (err) {
//     next(err)
//   }
// })

router.get("/", async (req, res, next) => {
  try {
    // List all posts
    // call the listProducts from the Store model
    // and return the results as the products key of an object
  } catch (err) {
    next(err);
  }
});

// router.get("/:postId", async (req, res, next) => {
//     try {
//       // fetch single post
//     } catch (err) {
//       next(err)
//     }
//   })

//   router.put("/:postId", async (req, res, next) => {
//     try {
//       // Update a single post
//     } catch (err) {
//       next(err)
//     }
//   })

//   router.post("/:postId/ratings", async (req, res, next) => {
//     try {
//       // Create a rating for a post
//     } catch (err) {
//       next(err)
//     }
//   })

module.exports = router;
