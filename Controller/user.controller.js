const getUsers = async (req, res) => {
    try {
        return res.json({
            success: true,
            data: [
                { name: "Nitesh" },
                { name: "Veer" }
            ]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

module.exports = { getUsers };
