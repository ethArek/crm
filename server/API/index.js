const router = require("express").Router();

const { mongoose } = require("../db/mongoose.js");

router.use("/users", require("./users/users.js"));
router.use("/leads", require("./lead/lead.js"));
router.use("/call", require("./call/call.js"));

module.exports = router;
