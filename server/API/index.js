const router = require("express").Router();

const { mongoose } = require("../db/mongoose.js");

router.use("/users", require("./users/users.js"));
router.use("/lead", require("./lead/lead.js"));
router.use("/call", require("./call/call.js"));
router.use("/event", require("./event/event.js"));

module.exports = router;
