const express = require("express");
const Sleep = require("../models/sleep");
const security = require("../middleware/security");
const router = express.Router();

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const sleep = await Sleep.createSleep({
      user,
      sleep: req.body,
    });
    return res.status(201).json({ sleep });
  } catch (err) {
    next(err);
  }
});

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const sleeps = await Sleep.listSleepsForUser({ user });
    return res.status(200).json({ sleeps });
  } catch (err) {
    next(err);
  }
});
router.get("/last", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const sleepy = await Sleep.listLastSleep({ user });
    return res.status(200).json({ sleepy });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
