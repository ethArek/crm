const router = require("express").Router();
const _ = require("lodash");

const { User } = require("../../models/user.js");
const { Call } = require("../../models/call.js");

router.post("/register", (req, res) => {
  const body = _.pick(req.body, [
    "email",
    "password",
    "role",
    "homeLat",
    "homeLng",
    "firstName",
    "lastName"
  ]);
  const user = new User(body);
  user
    .save()
    .then(() => {
      res.json({ message: "Dodano uzytkownika" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Nie udalo sie dodac uzytkownika");
    });
});

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

router.get("/getCalls", async (req, res) => {
  const calls = await Call.find();
  res.json(calls);
});

module.exports = router;
