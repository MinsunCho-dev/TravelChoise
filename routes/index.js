var express = require("express")
var controller = require("../controller/Cfront")
const router = express.Router()

router.get("/", controller.front)

router.get("/signup", controller.signup)
router.get("/search", controller.search)
router.get("/community", controller.community)
router.get("/sights", controller.sights)


module.exports = router;