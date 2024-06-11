const UserServices = require("../services/userServices");

class UserControllers {
    constructor() {
        this.userService = new UserServices();
    }

    async getAll(req, res) {
        try {
            const users = await this.userService.getAll();
            res.status(200).json({
                success:true,
                data:users
            });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async create(req, res) {
        try {
            const newUser = await this.userService.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = UserControllers;
