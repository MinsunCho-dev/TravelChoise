var express = require("express")
var controller = require("../controller/Cfront")
const router = express.Router()

router.get("/",controller.front)
router.get("/search",controller.search)


module.exports = router;