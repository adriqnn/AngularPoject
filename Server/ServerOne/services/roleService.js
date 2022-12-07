const Role = require('../models/Role');

async function create(role){
    return await Role.create(role);
};

async function countRoles(){
    return await Role.count();
};

async function getByName(role){
    const roleByName = await Role.findOne({role}).collation({locale: 'en', strength: 2});
    return roleByName;
}

module.exports = {
    create,
    countRoles,
    getByName
};