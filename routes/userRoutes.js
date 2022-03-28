const express = require('express');
const router = express.Router();
const User = require('../models/userModel');



//-------------- ROUTES ------------------

router.post('/', (req, res) =>{
    User.create(req.body)
    .then(data=>res.json(data)) 
    .catch((err)=>{
        console.log(err);
        res.status(500).json({msg:'something went wrong'})
    })
    })

    router.get('/', (req, res) =>{
        User.find() 
        .then(data=>res.json(data)) 
        .catch((err)=>{
            console.log(err);
            res.status(500).json({msg:'something went wrong'})
        })
        });
        router.delete('/:id', (req, res) =>{
            User.findByIdAndDelete( req.params.id ) 
            .then(data=>res.json(data)) 
            .catch((err)=>{
                console.log(err);
                res.status(500).json({msg:'something went wrong'})
            })
            });
         

    module.exports = router;