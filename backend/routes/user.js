const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/user', (req, res) => {
    User.find({}, (err,data) => {
        res.json(data);
    })
})

router.get('/user/:id', (req, res) => {
    User.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

router.delete('/user/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({'message': 'Deleted'});
})

router.post('/user', (req, res)=>{
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    user.save(() => {
        res.json(user);
    })
})

router.put('/user/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({'message': 'Updated'})
})


module.exports = router;