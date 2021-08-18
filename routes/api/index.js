const router = require("express").Router();
const dbRoutes = require("./dbRoutes");

router.use(dbRoutes);

module.exports = router;
