//Import Packages
const router = require('express').Router();
const express = require('express');

//Import Model
let User = require('../models/user_model');

//Find All Users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Create User
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;
    const newUser = new User({username, password, role});

    newUser.save()
        .then(()=> {res.json('User Added!')})
        .catch(err => res.status(400).json('Error: '+ err));
});

//Findby User ID
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Findby User ID
router.route('/login').post((req, res) => {
    User.findOne({
        username : req.body.username,
        password : req.body.password
    }, function (err, user) {
        if (err) { res.status(400).json('Error Retrieveing Data: '+ err) }
        if (!user) {
            // no user found, do sth
            res.status(400).json('User not Found! Check Credentials! ')
        }
        if(user) { 
            res.json(user)
        }
    })
        
        
});


module.exports = router;