const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')

.all((req,res,next)=>{
    req.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will Send all the Promotions to you');
})

.post((req,res)=>{
    res.end(`Will add the Promotions:${req.body.name} with description:${req.body.description}`);
})

.put((req,res)=>{
    res.statusCode = 403;
    res.end('PUT Operation not supported on /promotions');
})

.delete((req,res)=>{
    res.end('Deleting all Promotions');
});
// PROMOTIONS ID METHOD BELOW//

promotionRouter.route('/:promotionId')

.get((req,res)=>{
    res.end (`Will send details of the promotions:${req.params.promotionId}`);
})
.post((req,res)=>{
    res.statusCode = 403;
    res.end (`POST operation not supported on /promotions/${req.params.promotionId}`);
})

.put((req,res)=>{
    res.write(`Updating the Promotion:${req.params.promotionId}\n`);
    res.end(`Will update the Promotion:${req.body.name}
    with the description: ${req.body.description}`);
})

.delete((req,res)=>{
    res.end(`Deleting Promotions:${req.params.promotionId}`);
});

module.exports = promotionRouter;
