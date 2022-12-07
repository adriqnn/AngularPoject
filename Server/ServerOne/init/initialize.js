const { create, countRoles } = require('../services/roleService');
const { countUsers, createAdmin } = require('../services/userService');

module.exports = async () => {
    const ROLES_INITIALIZED = await countRoles();
    const ADMIN_INITIALIZED = await countUsers();

    if(ROLES_INITIALIZED == 0){
        await Promise.all(require('./role_db.json').map(e => create(e)));
    }
    if(ADMIN_INITIALIZED == 0){
        await createAdmin();
    } 
    
};




// let ROLES_INITIALIZED = count().then((v) => v).then(v => v);
// console.log(ROLES_INITIALIZED);
// let ROLES_INITIALIZED = count().then((v) => v);
// console.log(ROLES_INITIALIZED); 
//const roles = require('./role_db.json').map(async(e) => await create(e));