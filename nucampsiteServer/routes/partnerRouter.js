const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')

.all((req,res,next)=>{
    req.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res)=>{
    res.end('Will send all the partners to you');
})
.post((req,res)=>{
    res.end(`Will add the partners:${req.body.name} with description:${req.body.description}`);
})
.put((req,res)=>{
    res.end('PUT operation not supported on /partners');
})
.delete((req,res)=>{
    res.end('Deleting all Partners');
});

// PARTNER ID METHOD BELOW//

partnerRouter.route('/:partnerId')

.get((req,res)=>{
    res.end(`Will send details of the partners:${req.params.partnerId} to you`);
})

.post((req,res)=>{
    res.statusCode = 403;
    res.end(`POST operation not supported on /Partners/${req.params.partnerId}`);
})

.put((req,res)=>{
    res.write(`Updating the Partner:${req.params.partnerId}\n`);
    res.end(`Will update the Partners:${req.body.name}
    with description:${req.params.partnerId}`);
})

.delete((req,res)=>{
    res.end(`Deleting Partners:${req.params.partnerId}`);
});

module.exports = partnerRouter;