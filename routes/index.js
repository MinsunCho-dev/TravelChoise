var express = require("express")
var controller = require("../controller/Cfront")
const router = express.Router()

router.get("/",controller.front)
router.get("/login",controller.login)
router.get("/signup",controller.signup)
router.get("/search",controller.search)


module.exports = router;