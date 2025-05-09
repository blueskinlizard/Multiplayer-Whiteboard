//Whenever a user shares or requests collaboration, refer here
const db = require("../prisma_queries/queries.js")
const express = require('express')
const router = express.Router();


router.post(`findsharedwhiteboards`, async(req, res)=>{
    const { userToSearch, whiteboardToSearch } = req.body;
    //userToSearch is not an object, but rather a standalone id variable
    //whiteboardToSearch is meant to verify users
    
    try{
        const fetchedSharedWhiteboards = await db.findsharedwhiteboards(userToSearch, whiteboardToSearch);
        if(!fetchedSharedWhiteboards){
            return res.status(404).json({ message: `No shared whiteboards found, status 404`})
        }
        return res.status(200).json({ sharedWhiteboardData: fetchedSharedWhiteboards })
    }catch(err){
        return res.status(500).json({message: `Internal server error while fetching user: (${userToSearch}) shared whiteboards`})
    }
})


module.exports = router;