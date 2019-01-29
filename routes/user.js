const express = require('express')
const router = express.Router()
const passport = require('../passport')
const db = require('../models')

router.post('/', (req, res) => {
    console.log('Server Side Good');

    // ADD VALIDATION
    db.users.findOne({ where: {email: req.body.email}})
        .then(function(found) {
             if (found) {
                res.json({
                    error: `Sorry, already a user with the username: ${req.body.email}`
                })
            }
            else {
                console.log(req.body)
                db.users.create({
                    email: req.body.email,
                    password: req.body.password,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    user_address: req.body.address,
                    user_city: req.body.city,
                    user_state: req.body.state,
                    user_zip: req.body.zip
    
                })
                res.send("User Created");
                
            }
        })
})
    

router.post('/login',
    function (req, res, next) {
        console.log('routes / login, req.body: ');
        console.log("router login req.body: " + req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('log in route', req.user.email, req.user.password);
        var userInfo = {
            email: req.user.email,
            password: req.user.password
        };
        console.log("User Found" + JSON.stringify(userInfo));
        
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log("User signed in? " + req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router