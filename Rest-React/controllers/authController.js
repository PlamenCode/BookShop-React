const { login, register } = require('../services/authService');
const parseError = require('../utils/parser');

const authController = require('express').Router();

authController.post('/login', async (req, res) => { //was a GET Request
    try {
        const email = req.body.email;
        const password = req.body.password;
        const result = await login(email, password);
        res.status(200).json(result)
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message });
    }
});

authController.post('/register', async (req, res) => {
    try {
        if(req.body.email == '' || req.body.password == '' || req.body.repass == ''){
            throw new Error('all fields are required');
        };
        if(req.body.password !== req.body.repass){
            throw new Error('passwords dont match');
        }
        const result = await register(req.body.email, req.body.password);
        res.status(200).json(result);
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message, email: true });
    }
});

module.exports = authController;
