const User = require('../models/User');
const bcrypt = require('bcrypt');
const { getRoleByName } = require('../services/roleService');

async function createAdmin(){
    const hashedPassword = await bcrypt.hash('admin', 10);
    const adminId = (await getRoleByName('Admin'))._id;
    const userId = (await getRoleByName('User'))._id;

    await User.create({
        username: 'admin',
        email: 'admin@admin.com',
        hashedPassword,
        roles: [adminId, userId],
        createdAt: Date.now()
    });
};

async function countUsers(){
    return await User.count();
}

module.exports = {
    createAdmin,
    countUsers
}