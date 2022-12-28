const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true,
    },
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(regex);
            },
            message: "Please enter a vailid email address",
        },
    },

    password: {
        required: true,
        type: String,
        // validate: {
        //     validator: (value) => {
        //         return value.length > 6;
        //     },
        //     message: "Password is weak",
        // },
    },
    address: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'user',
    },

    //CART
});

const User = mongoose.model("User", userSchema);
module.exports = User;