const router = require("express").Router();
const _ = require("lodash");

const { User } = require("../../models/user.js");
const { Event } = require("../../models/event.js");
const { Lead } = require("../../models/lead.js");

router.post("/addEvent", async (req, res) => {
  try {
    const body = _.pick(req.body, [
      "leadId",
      "sellerId",
      "assistantId",
      "date"
    ]);

    const event = new Event(body);
    await event.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err });
  }
});

router.get("/getEvents", async (req, res) => {
  const result = [];
  const events = await Event.find({ sellerId: req.query.sellerId });
  events.forEach(async event => {
    const eventObj = event.toObject();
    const lead = await Lead.findById(event.leadId);
    const leadObj = lead.toObject();
    eventObj.leadData = leadObj;
    result.push(eventObj);
  });

  setTimeout(function() {
    res.json(result);
  }, 1000);
});

module.exports = router;
