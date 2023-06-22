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
router.post('/addCandidate', uploadMultiple , (req, res) => {
    const user = {
        document: req.files['document'][0].filename,
        fingerprint: req.files['fingerprint'][0].filename,
        mobile: req.body.mobile,
        address: req.body.address,
        email: req.body.email,
        status: req.body.status,
        gender: req.body.gender,
        party_id: req.body.party_id
    }

    models.Candidate.create(user).then(result => {
        req.session.message = {
            type: 'success',
            message: ' Candidate added successfully!'
        };
        res.redirect('/candidateIndex');
    }).catch(error => {
        res.json({ message: error.message, type: 'danger' });
    });

})

//get all users route
router.get('/candidateIndex', (req, res) => {
    
    models.Candidate.findAll({ include: models.party }).then(users => {
        res.render('candidateIndex', {
            title: "Candidate page",
            users: users
        })
    }).catch(error => {
        res.json({ message: error.message });
    });
});


router.get('/addCandidate', (req, res) => {
    models.Party.findAll().then((parties) => {
        res.render('addCandidate', {
            title: "Add Candidate",
            parties:parties
        });
    })
   
});


//edit an user route
router.get("/edits/:id", (req, res) => {
    let id = req.params.id;
    models.Candidate.findByPk(id).then(user => {
        if (user == null) {
            res.redirect("/candidateIndex");
        } else {
            res.render("editCandidate", {
                title: "Edit Candidate",
                user: user
            })
        }
    }).catch(error => {
        res.redirect("/candidateIndex");
    })

})

//update user route
router.post('/updates/:id', uploadMultiple , (req, res) => {
    let id = req.params.id;
    let new_image1 = req.files['document'] ? req.files['document'][0].filename : req.body.old_image1 ;
    let new_image2 = req.files['fingerprint'] ? req.files['fingerprint'][0].filename : req.body.old_image2; 

    const user = {
        document: new_image1,
        fingerprint: new_image2,
        mobile: req.body.mobile,
        address: req.body.address,
        email: req.body.email,
        status: req.body.status,
        gender: req.body.gender,
        party_id: req.body.party_id
        
        
    };

    models.Candidate.findByPk(id).then(users => {
        if (users) {
            models.Candidate.update(user, { where: { id: id } }).then(user => {
                req.session.message = {
                    type: 'success',
                    message: 'Candidate Updated successfully!',
                };
                res.redirect('/candidateIndex');
            }).catch(error => {
                res.json({ message: error.message, type: "danger" });
            })
        } else {
            res.json({ message: error.message, type: "danger" });
        }
    });
});



//delete user route
router.get('/deletes/:id', (req, res) => {
    let id = req.params.id;
   // let new_image1 = req.files['document'] ? req.files['document'][0].filename : req.body.old_image1 ;
    //let new_image2 = req.files['fingerprint'] ? req.files['fingerprint'][0].filename : req.body.old_image2; 

    models.Candidate.destroy({ where: { id: id } }).then(result => {
        if (result) {
            req.session.message = {
                type: 'success',
                message: 'Candidate deleted successfully!'
            };
            res.redirect('/candidateIndex');
            // if (result.document && new_image1) {
            //     fs.unlinkSync(`uploads/${result.document}`)
            // }
            // if (result.fingerprint && new_image2) {
            //     fs.unlinkSync(`uploads/${result.fingerprint}`)
            // }
        } else {
            res.json({ message: "Candidate is null" });
        }
    }).catch(error => {
        res.json({ message: error.message });
    });
});


module.exports = router;