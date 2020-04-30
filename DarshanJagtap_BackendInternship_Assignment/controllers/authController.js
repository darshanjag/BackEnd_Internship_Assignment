const User = require('./../models/userModel');

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.passwored,
      passwordConfirm: req.body.passwordConfirm,
    });
    res.status(201).json({
      status: 'succecss',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
