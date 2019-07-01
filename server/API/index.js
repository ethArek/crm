const router = require("express").Router();

const { mongoose } = require("../db/mongoose.js");

router.use("/users", require("./users/users.js"));
router.use("/leads", require("./lead/lead.js"));

module.exports = router;
