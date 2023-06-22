const express = require('express');
const router = express.Router();
const models = require('../models');
const multer = require('multer');
const fs = require('fs');

//image upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    }, filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});


var upload = multer({
    storage: storage,
}).single('image');

// Insert an user into database route
router.post('/addParty', upload, (req, res) => {
    const user = {
        name: req.body.name,
        symbol: req.file.filename

    }

    models.Party.create(user).then(result => {
        req.session.message = {
            type: 'success',
            message: ' Party added successfully!'
        };
        res.redirect('/partyIndex');
    }).catch(error => {
        res.json({ message: error.message, type: 'danger' });
    });

})

//get all users route
router.get('/partyIndex', (req, res) => {
    models.Party.findAll().then(users => {
        res.render('partyIndex', {
            title: "Party page",
            users: users
        })
    }).catch(error => {
        res.json({ message: error.message });
    });
});


router.get('/addParty', (req, res) => {
    res.render('addParty', {
        title: "Add Party"
    });
});


//edit an user route
router.get("/edit/:id", (req, res) => {
    let id = req.params.id;
    models.Party.findByPk(id).then(user => {
        if (user == null) {
            res.redirect("/partyIndex");
        } else {
            res.render("editParty", {
                title: "Edit User",
                user: user
            })
        }
    }).catch(error => {
        res.redirect("/partyIndex");
    })

})

//update user route
router.post('/update/:id', upload, (req, res) => {
    let id = req.params.id;
    let new_image = '';
    if (req.file) {
        new_image = req.file.filename;
        try {
            fs.unlinkSync('./uploads/' + req.body.old_image);
        } catch (err) {
            console.log(err);
        }
    } else {
        new_image = req.body.old_image;
    }


    const user = {
        name: req.body.name,
        symbol: new_image,
    };

    models.Party.findByPk(id).then(users => {
        if (users) {
            models.Party.update(user, { where: { id: id } }).then(user => {
                req.session.message = {
                    type: 'success',
                    message: 'Party Updated successfully!',
                };
                res.redirect('/partyIndex');
            }).catch(error => {
                res.json({ message: error.message, type: "danger" });
            })
        } else {
            res.json({ message: error.message, type: "danger" });
        }
    });
});



//delete user route
router.get('/delete/:id', (req, res) => {
    let id = req.params.id;
   
    models.Party.destroy({ where: { id: id } }).then(result => {
        if (result) {
            req.session.message = {
                type: 'success',
                message: 'Party deleted successfully!'
            };
            res.redirect('/partyIndex');
            if (result.symbol != '') {
                try {
                    fs.unlinkSync('./uploads' + result.symbol);
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            res.json({ message: "Party is null" });
        }
    }).catch(error => {
        res.json({ message: error.message });
    });
});


module.exports = router;