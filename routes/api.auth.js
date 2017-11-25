const express = require("express")
const router = express.Router()

const controller = require("../controller/auth.contorller")

router.get("/", controller.get)

router.post("/signup", controller.signup)

router.post("/login", controller.login)

router.post("/check", controller.checkToken)

module.exports = router
