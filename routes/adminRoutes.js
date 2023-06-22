const express = require('express');

const admincontrollers = require('../controllers/adminController');

const router = express.Router();



router.post('/login', admincontrollers);

module.exports = router;