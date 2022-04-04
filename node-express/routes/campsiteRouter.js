
const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')


.all((req,res,next)=>{
    req.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res)=>{
    res.end('Will send all the campsites to you ');
})

.post((req,res)=>{
 res.end (`Will send the Campsite:${req.body.name} with description:${req.body.description}`);
})

.put((req,res)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})

.delete((req,res) =>{
    res.end('Deleting all Campsites');
});
// CAMPSITEID METHOD BELOW//

campsiteRouter.route('/:campsiteid')

 .all((req,res,next)=>{
     req.statusCode = 200;
     res.setHeader('Content-Type','text/plain');
     next();
 })
 .get((req,res)=>{
     res.end(`Will send details of the campsite:${req.params.campsiteid} to you`);
 })
 .post((req,res)=>{
     res.statusCode = 403;
     res.end (`POST operation not supported on /campsites/${req.params.campsiteid}`);
 })
 .put((req,res)=>{
     res.write(`Updating the campsite:${req.params.campsiteid}\n`);
     res.end(`Will update the campsite:${req.body.name}
     with description:${req.body.description}`);
 })
 .delete((req,res)=>{
     res.end(`Deleteing campsite:${req.body.description}`);
 });

module.exports = campsiteRouter;