const express = require("express")
const router = express.Router()

const Users = require("../controller/users.controller")

router.get("/", Users.getAllUsers) // api/users/
router.get("/:uID", Users.getAUsers) // api/users/:uID
router.get("/:uID", Users.destroy) // api/users/:uID

module.exports = router
