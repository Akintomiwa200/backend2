const express = require("express");
const {createUser, getUser} = require("../controller/UserController")
const userRoute = express.Router()

userRoute.post("/create", createUser)
userRoute.route("/users").get(getUser)
// .patch(editUser)


module.exports = userRoute