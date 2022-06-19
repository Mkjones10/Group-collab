const express = require('express')
const memeRouter = express.Router()
const Meme = require('../models/meme')
const jwt = require('jsonwebtoken')

memeRouter.get('/' , (req,res,next) =>{
    Meme.find()
    .populate('user')
    .then(memes =>{
        return res.status(200).send(memes)
    })
    .catch(err => console.log(err))
})

memeRouter.post('/', (req,res,next) =>{
    req.body.user = req.auth._id
    
})