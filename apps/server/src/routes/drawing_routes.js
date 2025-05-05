const db = require("../prisma_queries/queries.js")
const express = require('express')
const redis = require('redis')

const cache = redis.createClient();
const router = express.Router();
cache.connect().catch(err => {
    console.error('Redis connection error:', err);
});


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
        return res.status(500).json({ message: "Internal server error while adding whiteboard to user: "+err})
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
        return res.status(500).json({message: `Internal server error while getting all whiteboards: ${err}`})
    }
})

router.get("/getdrawing", async(req,res) =>{
    const { drawingKey, whiteboardToSearch } = req.body;
    if (!drawingKey) {
        return res.status(400).json({ message: "Drawing key is required" });
    }
    try{
        const cachedDrawingStr = await cache.hget(`Whiteboard${whiteboardToSearch}:${drawingKey}`) //Check cache for drawing key
        if(cachedDrawingStr){ //When found
            const cachedDrawing = JSON.parse(cachedDrawingStr) //Parse and then return data associated w/ key
            console.log(`DrawingKey: ${drawingKey} retrieved from cache`);
            return res.status(200).json({drawingData: cachedDrawing})
        }else{
            const fetchedDrawingData = await db.findDrawingData(drawingKey);
            if(!fetchedDrawingData){
                return res.status(404).json({message: "Drawing does not exist"})
            }
            await cache.hset(drawingKey, JSON.stringify(fetchedDrawingData), { 
                //Adds to cache, hset syntax given the kvp structure for hash
                EX: 3600 
            });
            return res.status(200).json({drawingData: fetchedDrawingData})
        }
    }catch(err){
        return res.status(500).json({message: `Internal server error while retrieving drawing: ${err}`})
    }
    
})

router.post("/deletedrawing", async(req, res) =>{
    const { drawingKeyDelete, whiteboardFromId } = req.body;
    //whiteboardFromId is solely a naming convention, for easier kvp notation
    try{
        const cachedDrawingData = await cache.hget(`WHiteboard${whiteboardFromId}:${drawingKeyDelete}`)
        if(cachedDrawingData){
            await cache.hDel(`Whiteboard${whiteboardFromId}:${drawingKeyDelete}`) //remove from cache 
            await db.deleteDrawing()
        }
    }catch(err){
        return res.status(500).json({message: `Internal server error while deleting drawing`})
    }

})

router.post("/newdrawing", async(req, res) =>{
    const { drawingKeyAdd, drawingData, whiteboardToAdd} = req.body;
    try{
        await cache.hSet(`Whiteboard${whiteboardToAdd}:${drawingKeyAdd}`, {
            data: drawingData
        })
    }catch(err){

    }
})

module.exports = router;