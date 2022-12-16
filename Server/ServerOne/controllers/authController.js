const { parseError } = require('../util/parser');
const validator = require('validator');
const { register, login, logout } = require('../services/userService');
const authController = require('express').Router();
const { authCookieName } = require('../app-config');

authController.post('/register', async (req, res) => {
    try{
        if(req.body.username == '' || req.body.email == '' || req.body.password == '' ){
            throw new Error('All fields are required!');
        };
        if(req.body.username.length < 3){
            throw new Error('The username must be at least 3 characters long!');
        };
        if(validator.isEmail(req.body.email) == false){
            throw new Error('Invalid email!')
        };
        if(req.body.password.length < 3){
            throw new Error('Password must be at least 3 characters long!');
        };
        if(req.body.password != req.body.repass){
            throw new Error('Passwords don\'t match!');
        };
        const userInfo = await register(req.body.username, req.body.email, req.body.password);
        const user = userInfo[0];
        const token = userInfo[1];
        res.cookie(authCookieName, token, { httpOnly: true });
        res.status(200).send({user, token});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

authController.post('/login', async (req, res) => {
    try{
        const userInfo = await login(req.body.username, req.body.password);
        const user = userInfo[0];
        const token = userInfo[1];
        res.cookie(authCookieName, token, { httpOnly: true });
        res.status(200).send({user, token});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

authController.post('/logout', async (req, res) => {
    try{
        const token = req.cookies[authCookieName];
        console.log(token);
        const blacklistedToken = await logout(token);
        res.clearCookie(authCookieName);
        res.status(204).send({message: 'Logged Out!'});
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

module.exports = authController;