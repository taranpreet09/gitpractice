const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,   // fixed: require → required
            trim: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }  // adds createdAt & updatedAt
);

module.exports = mongoose.model("User", userSchema);
