const { DataTypes } = require('sequelize');
const sequelize = require('../services/db');

// Definición del modelo User
const User = sequelize.define('User', {
    // Definición de la columna 'id'
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Definición de la columna 'name'
    name: {
        type: DataTypes.STRING(100),
        allowNull: false // No permite valores nulos
    },
    // Definición de la columna 'password'
    password: {
        type: DataTypes.STRING(100),
        allowNull: false // No permite valores nulos
    },
    // Definición de la columna 'role'
    role: {
        type: DataTypes.ENUM('admin', 'user', 'guest'), // Definición del tipo ENUM
        allowNull: false // No permite valores nulos
    }
}, {
    // Opciones del modelo
    timestamps: false // No agregar campos createdAt y updatedAt automáticamente
});

module.exports = User;