const mongoose = require("mongoose")
const User = require("../models/users.models")

module.exports = {
  destroy: (req, res, next) => {
    mongoose.connection.db.dropCollection("users", (err, result) => {
      if (err) res.send(err)
      else res.send("Collection users dropped")
    })
  },

  getAllUsers: (req, res, next) => {
    const users = User.find({}, (err, users) => {
      if (err) res.send(err)
      else res.send(users)
    })
  },

  getAUsers: (req, res, next) => {
    const user = User.findOne(
      {
        _id: req.params.uID
      },
      (err, user) => {
        if (err) res.send(err)
        else res.send(user)
      }
    )
  }
}
