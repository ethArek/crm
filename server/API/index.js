const router = require("express").Router();

const { mongoose } = require("../db/mongoose.js");

router.use(require("./middlewares/timeout.js"));
router.use("/users", require("./users/usersRoutes.js"));
router.use("/matches", require("./matches/matchesRoutes.js"));
router.use(
  "/administration/users",
  require("./administration/users/usersRoutes.js")
);

module.exports = router;
