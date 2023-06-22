const express = require('express');
const router = express.Router();
const models = require('../models');

// Insert an user into database route
router.post('/addVoting',(req, res) => {
    const user = {
    
        candidate_id: req.body.candidate_id,
    }

    models.Voting.create(user).then(result => {
        req.session.message = {
            type: 'success',
            message: ' Voting added successfully!'
        };
        res.redirect('/votingIndex');
    }).catch(error => {
        res.json({ message: error.message, type: 'danger' });
    });

})

//get all users route
router.get('/votingIndex', (req, res) => {
    models.Voting.findAll({ include: models.candidate }).then(users => {
        res.render('votingIndex', {
            title: "Voting page",
            users: users
        })
    }).catch(error => {
        res.json({ message: error.message });
    });
});


router.get('/addVoting', (req, res) => {
    models.Candidate.findAll().then((candidates) => {
        res.render('addVoting', {
            title: "Add Voting",
            candidates: candidates
        });
    })
    
});


//edit an user route
router.get("/editssss/:id", (req, res) => {
    let id = req.params.id;
    models.Voting.findByPk(id).then(user => {
        if (user == null) {
            res.redirect("/votingIndex");
        } else {
            res.render("editVoting", {
                title: "Edit Voting",
                user: user
            })
        }
    }).catch(error => {
        res.redirect("/votingIndex");
    })

})

//update user route
router.post('/updatessss/:id',(req, res) => {
    let id = req.params.id;
 
    const user = {
        candidate_id: req.body.candidate_id,

    };

    models.Voting.findByPk(id).then(users => {
        if (users) {
            models.Voting.update(user, { where: { id: id } }).then(user => {
                req.session.message = {
                    type: 'success',
                    message: 'Voting Updated successfully!',
                };
                res.redirect('/votingIndex');
            }).catch(error => {
                res.json({ message: error.message, type: "danger" });
            })
        } else {
            res.json({ message: error.message, type: "danger" });
        }
    });
});



//delete user route
router.get('/deletessss/:id', (req, res) => {
    let id = req.params.id;
   // let new_image1 = req.files['document'] ? req.files['document'][0].filename : req.body.old_image1 ;
    //let new_image2 = req.files['fingerprint'] ? req.files['fingerprint'][0].filename : req.body.old_image2; 

    models.Voting.destroy({ where: { id: id } }).then(result => {
        if (result) {
            req.session.message = {
                type: 'success',
                message: 'Voting deleted successfully!'
            };
            res.redirect('/votingIndex');
        } else {
            res.json({ message: "Voting is null" });
        }
    }).catch(error => {
        res.json({ message: error.message });
    });
});


module.exports = router;