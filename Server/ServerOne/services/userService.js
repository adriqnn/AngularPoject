const User = require('../models/User');
const bcrypt = require('bcrypt');
const bcrypt = require('bcrypt');
const { getRoleByName } = require('../services/roleService');
const { blacklistToken } = require('../services/tokenBklacklistService');
const JWT_SECRET = 'zxc';

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
};

async function register(username, email, password){
    const existing = await User.findOne({username}).collation({locale: 'en', strength: 2});
    if(existing){
        throw new Error('Email is taken!');
    };
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = (await getRoleByName('User'))._id;
    const user = await User.create({
        username,
        email,
        hashedPassword,
        roles: [userId],
        createdAt: Date.now()
    });
    const token = createJWTToken(user);
    const safeUser = removePassword(user);
    const userInfo = [safeUser, token];
    return userInfo;
};

async function login(username, password){
    const user = await User.findOne({email}).collation({locale: 'en', strength: 2});
    if(!user){
        throw new Error('Incorrect email or password!');
    };
    const match = await bcrypt.compare(password, user.hashedPassword);
    if(!match){
        throw new Error('Incorrect email or password!');
    };
    const token = createJWTToken(user);
    const safeUser = removePassword(user);
    const userInfo = [safeUser, token];
    return userInfo;
};

async function logout(token){
    return await blacklistToken(token);
};

function createJWTToken({_id, username, email, roles, createdAt}){
    const payload = {
        _id,
        username,
        email,
        role: roles[0],
        createdAt
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
    return token;
};

function verifyTokenAuth(token){
    return jwt.verify(token, JWT_SECRET);
};

const removePassword = (data) =>{
    const { hashedPassword, __v, ...userData } = data;
    return userData;
};

module.exports = {
    createAdmin,
    countUsers, 
    register,
    login,
    logout,
    verifyTokenAuth
};