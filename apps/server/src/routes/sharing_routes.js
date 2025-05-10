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

router.post(`sharenewboard`, async(req, res)=>{
    const {receiverName, whiteboardId} = req.body;
    try{
        const senderObject = req.user;
        if(!senderObject){
            return res.status(404).json({message: "User not signed in, sender object not found while sharing"})
        }
        const receiverObject = await db.findUserByName(receiverName);
        if(!receiverObject){
            return res.status(404).json({message: `Recipient with Name: ${receiverName} not found while sharing whiteboard`})
        }
        const whiteboardObject = await db.findWhiteboardById(whiteboardId);
        if(!whiteboardObject){
            return res.status(404).json({message: `Whiteboard with ID: ${whiteboardId} not found while sharing whiteboard`})
        }
        if (whiteboardObject.OwnerID !== senderObject.id) {
            return res.status(403).json({ message: `User with ID: ${req.user.id} and Name: ${req.user.name} does not own this whiteboard, sharing aborted` });
        }
        await db.addSharedWhiteboard(senderObject, receiverObject, whiteboardObject)
        return res.status(200).json({message: `Whiteboard with ID: ${whiteboardId} shared successfully to recipient: ${receiverName} by sender: ${req.user.name}`})
    }catch(err){
        return res.status(500).json({message: `General error while creating new shared whiteboard, error: ${err}`})
    }
})

module.exports = router;