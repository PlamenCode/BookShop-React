const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_JWT = 'Top-Secret-Jwt-Secret-Do-Not-Tell-Anybody'; 


async function login(email, password){
    const user = await User.findOne( { email } ).collation({locale: 'en', strength: 2});
    if(!user){ throw new Error('Invalid Email or Passwords.') };

    const match = await bcrypt.compare(password, user.hashedPass);
    if(!match){ throw new Error('Invalid Email or Passwords.') };
    return {
        token: createToken(user),
        userId: user._id
    }
};

async function register(email, password){
    const existing = await User.findOne({ email }).collation({locale: 'en', strength: 2});
    if(existing){ throw new Error('Email is taken') };

    const user = await User.create({
        email,
        hashedPass: await bcrypt.hash(password, 10)
    });

    return {
        token: createToken(user),
        userId: user._id
    }
}




function createToken(user){
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email
    };
    return jwt.sign(payload, SECRET_JWT)
};

function verifyoken(token){
    return jwt.verify(token, SECRET_JWT);
};

module.exports = {
    login,
    register,
    verifyoken
}