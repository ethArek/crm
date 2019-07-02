const router = require("express").Router();
const _ = require("lodash");

const { User } = require("../../models/user.js");
const { mongoose } = require("../../db/mongoose.js");

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

router.post("/login", async (req, res) => {
  const body = _.pick(req.body, ["email", "password"]);
  try {
    const user = await User.findByCredentials(body.email, body.password);
    const token = await user.generateAuthToken();
    const result = {
      userId: user._id,
      token: token,
      email: user.email,
      role: user.role
    };
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: err });
  }
});

module.exports = router;
