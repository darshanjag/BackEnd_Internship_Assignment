const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please enter a valid email'],
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'please confirm your password'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'passwords did not match',
        },
    },
  
    avatar: {
        type: String,
    },
},{
    toJSON: {virtuals: true},
    toObject: {virtuals: true},


});

userSchema.virtual('expenses', {
    ref: 'Expense',
    foreignField: 'user',
    localField: '_id'
  });
userSchema.virtual('budget', {
    ref: 'Budget',
    foreignField: 'user',
    localField: '_id'
  });
userSchema.virtual('categories', {
    ref: 'Category',
    foreignField: 'user',
    localField: '_id'
  });
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model('USER', userSchema);
module.exports = User;