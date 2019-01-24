const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../passport')

router.post('/', (req, res) => {
    console.log('user signup');

    // ADD VALIDATION
    db.users.findOne({ where: {email: req.body.email}})
        .then(function(found) {
             if (found) {
                res.json({
                    error: `Sorry, already a user with the username: ${email}`
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
    
                })
            }
        })
})
    

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.body.email
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
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