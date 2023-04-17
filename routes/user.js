const express = require('express')
const User = require('../models/user')
const router = express.Router()
/////////////// Post 5 users ////////////
router.post('/users' , (req , res)=>{
    const user = new User(req.body)
    user.save()
    .then((users)=>{res.status(200).send(users)})
    .catch((error)=>{res.status(400).send(error)})
})
/////////////////// get all users/////////
router.get ('/users' , (req , res) => {
    User.find({})
    .then ((users) =>{
        res.status(200).send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
  })
////////////// get the first and second docs by id//////////
router.get('/users/:id' , (req , res)=>{
    const _id = req.params.id
    User.findById(_id)
    .then((user)=>{
        if(!user){
            return res.status(404).send('Unable to find user')
        }
        res.status(200).send(user)
    })
    .catch((e)=>{res.status(500).send(e)})
})
/////////////////// patch from 3 to 5 /////////////
router.patch('/users/:id' , async (req , res)=>{
    try{
        const _id = req.params.id
        const user = await User.findByIdAndUpdate(_id , req.body , {
            new : true,
            runvalidators : true
        })
        if(!user){
            return res.status(404).send('no user Founded')
        }
        res.status(200).send(user)
    }
    catch(error){
        res.status(400).send(error)
    }
})

//////////////// to delete the last 2 users of my data///////////
router.delete('/users/:id' , async(req , res)=>{
    try{
        const _id = req.params.id
        const user = await User.findByIdAndUpdate(_id)
        if(!user){
            return res.status(404).send('user not Found')
        }
        res.status(200).send(user)
    }
    catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;