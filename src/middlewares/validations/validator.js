//validator function 
const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
        const errors = result.array().map(error => error.msg);
        return res.status(422).json({ errors: errors });
    }
    next();
};