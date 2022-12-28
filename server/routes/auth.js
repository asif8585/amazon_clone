const express = require('express');
const User = require('../modals/user');
var bcrypt = require('bcryptjs');
const authRouter = express.Router();

// authRouter.get("/user", (req, res) => {
//     res.json({ msg: "auth router file is working" });
// });


// SIGNUP ROUT CREATED

authRouter.post("/api/signup", async (req, res) => {
    //get data from client
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User with same email already exists!" });
        }

        // const hashPassword = await bcryptjs.hash(password, 8);
        const hashPassword = await bcrypt.hash(password, 8);

        var user = new User({
            name,
            email,
            password: hashPassword,
        });
        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = authRouter;  //export krna pdega taki index.js me use kr ske ese//