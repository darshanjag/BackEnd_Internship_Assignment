const User = require('./../models/userModel');

exports.signup = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        console.log(req.body)
        res.status(201).json({
            status: 'succecss',
            data: {
                user: newUser
            }
        })
    } catch (err) {
        console.log(err)
    }

}