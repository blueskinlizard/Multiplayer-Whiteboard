const db = require("../prisma_queries/queries.js")
const express = require('express')
const redis = require('redis')

const cache = redis.createClient();
const router = express.Router();

router.post("/newwhiteboard", async(req, res) =>{
    const { whiteboardName } = req.body;
    const currentUser = req.user;
    if(!currentUser){ return res.status(401).json({ message: "user not authenticated" })}
    if(!whiteboardName){ return res.status(400).json({ message: "whiteboard name not found" })}
    try{
        const createdWhiteboard = await db.createWhiteboard(currentUser, whiteboardName);
        //Returns selected id as specified in query
        return res.status(200).json({
            id: createdWhiteboard
        })
        //One - time thing, no need for Redis cache optimization
    }catch(err){
        return res.status(500).json({ message: "error in adding whiteboard to user: "+err})
    }
})
router.get("/allwhiteboards", async(req, res) =>{
    const { inputtedUser } = req.body;
    if(!inputtedUser){return res.status(401).json({ message: "username parameter not provided"})}
    try{
        const fetchedUser = await db.findUserByName(inputtedUser);
        
        if(!fetchedUser){ return res.status(404).json({message: "user does not exist"})}
        const fetchedWhiteboards = await db.findUserWhiteboards(inputtedUser);
        return res.status(200).json({
            ownedWhiteboards: fetchedWhiteboards.Whiteboard
        })

    }catch(err){

    }
})

module.exports = router;