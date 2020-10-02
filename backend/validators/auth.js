const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmpty()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6})
        .withMessage('Password must be at leat 6 characters long')
]