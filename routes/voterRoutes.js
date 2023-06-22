const express = require('express');
const router = express.Router();
const models = require('../models');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

//image upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    }, filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
});


var upload = multer({
    storage: storage,
});

var uploadMultiple = upload.fields([{ name: 'document', maxCount: 1}, {name: 'fingerprint', maxCount: 1}]);

// Insert an user into database route
router.post('/addVoter', uploadMultiple , (req, res) => {
    const user = {
        document: req.files['document'][0].filename,
        email: req.body.email,
        mobile: req.body.mobile,
        fingerprint: req.files['fingerprint'][0].filename,
        status: req.body.status,
    }

    models.Voter.create(user).then(result => {
        req.session.message = {
            type: 'success',
            message: ' Voter added successfully!'
        };
        res.redirect('/voterIndex');
    }).catch(error => {
        res.json({ message: error.message, type: 'danger' });
    });

})

//get all users route
router.get('/voterIndex', (req, res) => {
    models.Voter.findAll().then(users => {
        res.render('voterIndex', {
            title: "Voter page",
            users: users
        })
    }).catch(error => {
        res.json({ message: error.message });
    });
});


router.get('/addVoter', (req, res) => {
    res.render('addVoter', {
        title: "Add Voter"
    });
});


//edit an user route
router.get("/editsss/:id", (req, res) => {
    let id = req.params.id;
    models.Voter.findByPk(id).then(user => {
        if (user == null) {
            res.redirect("/voterIndex");
        } else {
            res.render("editVoter", {
                title: "Edit Voter",
                user: user
            })
        }
    }).catch(error => {
        res.redirect("/voterIndex");
    })

})

//update user route
router.post('/updatesss/:id', uploadMultiple , (req, res) => {
    let id = req.params.id;
    let new_image1 = req.files['document'] ? req.files['document'][0].filename : req.body.old_image1 ;
    let new_image2 = req.files['fingerprint'] ? req.files['fingerprint'][0].filename : req.body.old_image2; 

    const user = {
        document: new_image1,
        email: req.body.email,
        mobile: req.body.mobile,
        fingerprint: new_image2,
        status: req.body.status,

    };

    models.Voter.findByPk(id).then(users => {
        if (users) {
            models.Voter.update(user, { where: { id: id } }).then(user => {
                req.session.message = {
                    type: 'success',
                    message: 'Voter Updated successfully!',
                };
                res.redirect('/voterIndex');
            }).catch(error => {
                res.json({ message: error.message, type: "danger" });
            })
        } else {
            res.json({ message: error.message, type: "danger" });
        }
    });
});



//delete user route
router.get('/deletesss/:id', (req, res) => {
    let id = req.params.id;
   // let new_image1 = req.files['document'] ? req.files['document'][0].filename : req.body.old_image1 ;
    //let new_image2 = req.files['fingerprint'] ? req.files['fingerprint'][0].filename : req.body.old_image2; 

    models.Voter.destroy({ where: { id: id } }).then(result => {
        if (result) {
            req.session.message = {
                type: 'success',
                message: 'Voter deleted successfully!'
            };
            res.redirect('/voterIndex');
            // if (result.document && new_image1) {
            //     fs.unlinkSync(`uploads/${result.document}`)
            // }
            // if (result.fingerprint && new_image2) {
            //     fs.unlinkSync(`uploads/${result.fingerprint}`)
            // }
        } else {
            res.json({ message: "Voter is null" });
        }
    }).catch(error => {
        res.json({ message: error.message });
    });
});


module.exports = router;