const express = require('express');
const router = express.Router();
const models = require('../models');

// Insert an user into database route
router.post('/addIsGivenVote',  (req, res) => {
    const user ={
        voter_id: req.body.voter_id,
    }
         
             models.IsGivenVote.create(user).then(result => {
                req.session.message = {
                    type: 'success',
                    message: ' IsGivenVote added successfully!'
                };
                res.redirect('/isgivenvoteIndex');
            }).catch(error => {
                res.json({ message: error.message, type: 'danger' });
            });
        })

    



//get all users route
router.get('/isgivenvoteIndex', (req, res) => {

    models.IsGivenVote.findAll({ include: models.voter, attributes: ["id"] }).then(users => {
        res.render('isgivenvoteIndex', {
            title: "IsGivenVote page",
            users: users
        })
        
        
    }).catch(error => {
        res.json({ message: error.message });
    });
});


router.get('/addIsGivenVote', (req, res) => {
    models.Voter.findAll().then((voters) => {
        res.render('addIsGivenVote', {
            title: "Add IsGivenVote",
            voters: voters
        });
    })
});


//edit an user route
router.get("/editss/:id", (req, res) => {
    let id = req.params.id;
    models.IsGivenVote.findByPk(id, {include: models.voter}).then(user => {
        if (user == null) {
            res.redirect("/isgivenvoteIndex");
        } else {
            res.render("editIsGivenVote", {
                title: "Edit IsGivenVote",
                user: user
            })
        }
    }).catch(error => {
        res.redirect("/isgivenvoteIndex");
    })

})

//update user route
router.post('/updatess/:id', (req, res) => {
    let id = req.params.id;
    const user = {
        voter_id: req.body.voter_id,
      
    };

    models.IsGivenVote.findByPk(id).then(users => {
        if (users) {
            models.IsGivenVote.update(user, { where: { id: id } }).then(user => {
                req.session.message = {
                    type: 'success',
                    message: 'IsGivenVote Updated successfully!',
                };
                res.redirect('/isgivenvoteIndex');
            }).catch(error => {
                res.json({ message: error.message, type: "danger" });
            })
        } else {
            res.json({ message: error.message, type: "danger" });
        }
    });
});



//delete user route
router.get('/deletess/:id', (req, res) => {
    let id = req.params.id;
   
    models.IsGivenVote.destroy({ where: { id: id } }).then(result => {
        if (result) {
            req.session.message = {
                type: 'success',
                message: 'Isgivenvote deleted successfully!'
            };
            res.redirect('/isgivenvoteIndex');
        } else {
            res.json({ message: "Isgivenvote is null" });
        }
    }).catch(error => {
        res.json({ message: error.message });
    });
});


module.exports = router;