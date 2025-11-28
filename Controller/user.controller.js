const User = require("../model/user.model"); // Import your model if you want to use the DB


const getUsers = async (req, res) => {
    
       
        res.json({
            success: true,
            data: [{ name: "Nitesh" }, { name: "veer" }]
        });

    
};

module.exports = {getUsers};