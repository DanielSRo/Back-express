const { Router } = require('express');
const UserControllers = require('../controllers/userControllers');

class UserRouters {
    constructor() {
        this.router = Router();
        this.userControllers = new UserControllers();
        this.config();
    }

    config() {
        //endpoints
        this.router.get('/api/users', this.userControllers.getAll.bind(this.userControllers));
        this.router.post('/api/users', this.userControllers.create.bind(this.userControllers));
    }
}

module.exports = new UserRouters().router;
