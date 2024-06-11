const User = require('../model/user');

class UserServices {
    async getAll() {
        try {
            // Obtener todos los usuarios de la base de datos
            const users = await User.findAll();
            return users;
        } catch (error) {
            // Manejar cualquier error que ocurra durante la obtención de usuarios
            throw new Error("Error al obtener usuarios: " + error.message);
        }
    }

    async create(userData) {
        try {
            // Crear un nuevo usuario en la base de datos utilizando los datos proporcionados
            const newUser = await User.create(userData);
            return newUser;
        } catch (error) {
            // Manejar cualquier error que ocurra durante la creación de usuarios
            throw new Error("Error al crear usuario: " + error.message);
        }
    }
}

module.exports = UserServices;
