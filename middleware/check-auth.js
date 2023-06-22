const jwt = require('jsonwebtoken');
require('dotenv').config();				
function checkAuth(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.userData = decodedToken;
        next();
    }catch(e){
        return res.status(401).json({
            'message': "Invalid or expired token!",
           'error': e
        });
    }
}
module.exports = {
    checkAuth: checkAuth
};

							
		