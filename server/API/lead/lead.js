const router = require("express").Router();
const _ = require("lodash");

const { User } = require("../../models/user.js");
const { Lead } = require("../../models/lead.js");

router.post("/addCall", async (req, res) => {
  try {
    const body = _.pick(req.body, ["assistantId", "resultId", "dateStart"]);

    const call = new Call(body);
    await call.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

router.get("/getLeads", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

module.exports = router;
