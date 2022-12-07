const User = require('../models/User');
const bcrypt = require('bcrypt');
const { getByName } = require('../services/roleService');

async function createAdmin(){
    const hashedPassword = await bcrypt.hash('admin', 10);
    const adminId = (await getByName('Admin'))._id;
    const userId = (await getByName('User'))._id;

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