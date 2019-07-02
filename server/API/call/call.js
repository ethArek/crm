const router = require("express").Router();
const _ = require("lodash");

const { User } = require("../../models/user.js");
const { Call } = require("../../models/call.js");

router.post("/addCall", async (req, res) => {
  try {
    const body = _.pick(req.body, ["assistantId", "resultId"]);

    const call = new Call(body);
    await call.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err });
  }
});

router.get("/getCalls", async (req, res) => {
  const calls = await Call.find();
  res.json(calls);
});

module.exports = router;
