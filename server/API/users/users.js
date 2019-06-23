const router = require("express").Router();
const _ = require("lodash");

const { User } = require("../../models/user.js");
const { Match } = require("../../models/match.js");
const { mongoose } = require("../../db/mongoose.js");
const auth = require("../middlewares/authentication.js");

router.get("/add", (req, res) => {
  User.find()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.send(err);
    });
});

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
      email: user.email
    };
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: err });
  }
});

module.exports = router;
