const router = require("express").Router();
const _ = require("lodash");

const { User } = require("../../models/user.js");
const { Lead } = require("../../models/lead.js");

router.post("/addLead", async (req, res) => {
  try {
    const body = _.pick(req.body, [
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
      "status"
    ]);

    const lead = new Lead(body);
    await lead.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

router.get("/getLeads", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

router.get("/:leadId/getLead", async (req, res) => {
  const lead = await Lead.findById(req.params.leadId);
  res.json(lead);
});

module.exports = router;
