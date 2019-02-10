const express = require('express');
const router =  express.Router();

router.post('/', (req, res) =>{
    req.checkBody('email', 'Please enter a valid email address').isEmail();
    req.checkBody('message', 'The message must be longer than 30 characters').isLength({ min: 30 });

    var errors = req.validationErrors();

    if (errors) {
        return res.status(422).json({ errors: errors });
    }

    return res.json({message: "Your message has been sent!"})
});


module.exports = router;