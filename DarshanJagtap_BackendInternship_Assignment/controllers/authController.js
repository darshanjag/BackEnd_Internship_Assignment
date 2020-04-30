const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('./../models/userModel');
const AppError = require('./../utils/AppError');

//sign token
const signToken = id => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET)
}

exports.signup = async (req, res, next) => {
    //creating the user
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
        });
        //logging in the user
        const token = signToken(newUser._id);
        res.status(201).json({
            status: 'succecss',
            token,
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body;
        //checing if email and password exist
        if (!email || !password) {
            return next(new AppError('please provide email and password!', 400));
        }
        //check if the user and password are correct
        const user = await User.findOne({
            email
        }).select('+password');



        if (!user || !(await user.correctPassword(password, user.password))) {
            return next(new AppError('Incorrect email or password', 401));
        }

        //logging the user
        const token = signToken(user._id);

        res.status(201).json({
            status: 'succecss',
            token
        });
    } catch (err) {
        console.log(err);
    }
};

exports.protect = async (req, res, next) => {
    //  Getting token and checking if it exists
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    if (!token) {
        return next(new AppError('you are not logged in, please login to get access'));
    }
    //  valildate token
    let decoded;

    try{
     decoded= await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    }catch(err){
        console.log(err);
    }

    //  check if the user still exists
    const user = await User.findById(decoded.id);
    if(!user){
        return next(new AppError('user belonging to the token does not exist'));
    }
    //grant access to the protected route
    req.user = user;
    next();
}