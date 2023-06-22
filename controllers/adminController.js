const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


function login(req, res) {
const emails= req;
    console.log(req.body)
    models.Admin.findOne({ where: { email: req.body.email } }).then(user => {
        if (user === null) {
            res.status(401).json({
                message: "invalid credentials!",
            });
        } else {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({
                        email: user.email,
                    }, process.env.ACCESS_TOKEN_SECRET, function (err, token) {
                        res.status(200).json({
                            message: "Authentication successfull",
                            token: token
                        });
                    });
                } else {
                    res.status(401).json({
                        message: "invalid credentials!!!!!!!!!!",
                    });
                }
            });
        }
    }).catch(error => {
        console.log(error + "===============");
        res.status(401).json({
            message: "something went wrong!",
        });
    });
}

module.exports = login;