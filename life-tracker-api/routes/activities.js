const express = require("express");
const Activity = require("../models/activity");
const security = require("../middleware/security");
const router = express.Router();

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const activity = await Activity.createActivity({
      user,
      activity: req.body,
    });
    return res.status(201).json({ activity });
  } catch (err) {
    next(err);
  }
});

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;

    const activities = await Activity.listActivitiesForUser({ user });

    return res.status(200).json({ activities });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
