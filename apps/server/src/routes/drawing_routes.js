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
            id: createdWhiteboard.id
        })
        //One - time thing, no need for Redis cache optimization
    }catch(err){
        return res.status(500).json({ message: "Internal server error while adding whiteboard to user: "+err})
    }
})
router.post("/allwhiteboards", async(req, res) =>{
    const { inputtedUser } = req.body;
    //This will be an object
    if (!inputtedUser || !inputtedUser.id) {
        return res.status(401).json({ message: "Valid user parameter not provided" });
        }
    try{
        const fetchedWhiteboards = await db.findUserWhiteboards(inputtedUser.id);
        return res.status(200).json({
            ownedWhiteboards: fetchedWhiteboards.Whiteboard
        })

    }catch(err){
        return res.status(500).json({message: `Internal server error while getting all user whiteboards: ${err}`})
    }
})

router.get("/getalldrawingidswhiteboard/:whiteboardID", async(req, res) =>{
    const { whiteboardID } = req.params;
    try{
        if(!whiteboardID){
            return res.status(400).json({ message: "Whiteboard ID required"})
        }
        const fetchedDrawings = await db.findWhiteboardDrawings(whiteboardID);
        if(!fetchedDrawings){
            return res.status(404).json({ message: `No drawings found in whiteboard w/ id of: ${whiteboardID}`})
        }

        const drawingIds = fetchedDrawings.Drawings.map(drawing => drawing.id);
        return res.status(200).json({whiteboardIds: drawingIds}) 
        //Return data as prisma gives us, already encapsulated in separate object, adding more is making frontend annoying
    }catch(err){
        return res.status(500).json({ message: `Internal server error while getting all whiteboard drawings: ${err}`})
    }
})
router.post("/getdrawing", async(req,res) =>{
    //Purpose of this is when a whiteboard is landed on, and when all Drawing IDs have been fetched,
    //To fetch all of the drawings themselves
    const { drawingKey, whiteboardToSearch } = req.body;
    if (!drawingKey) {
        return res.status(400).json({ message: "Drawing key is required" });
    }
    try{
        const cachedDrawingStr = await cache.hGet(`Whiteboard${whiteboardToSearch}:${drawingKey}`, "data") //Check cache for drawing key
        if(cachedDrawingStr){ //When found
            const cachedDrawing =await JSON.parse(cachedDrawingStr) //Parse and then return data associated w/ key
            console.log(`DrawingKey: ${drawingKey} retrieved from cache`);
            console.log(`DrawingKey DrawingData:\n${JSON.stringify(cachedDrawing, null, 2)}`);
            return res.status(200).json({drawingObject: cachedDrawing})
        }else{ //Cache returned nothing, fetching from DB instead
            const fetchedDrawingData = await db.findDrawingData(drawingKey);
            //Literally returns the whole drawing object
            if(!fetchedDrawingData){
                return res.status(404).json({message: "Drawing does not exist", fetchedFor: `Drawing: ${drawingKey}`})
            }
            await cache.hSet(`Whiteboard${whiteboardToSearch}:${drawingKey}`, "data", JSON.stringify(fetchedDrawingData));
            await cache.expire(`Whiteboard${whiteboardToSearch}:${drawingKey}`, 3600);
            return res.status(200).json({drawingObject: fetchedDrawingData})
        }
    }catch(err){
        return res.status(500).json({message: `Internal server error while retrieving drawing: ${err}`})
    }
    
})

router.post("/deletedrawing", async(req, res) =>{
    const { drawingKeyDelete, whiteboardFromId } = req.body;
    //whiteboardFromId is solely a naming convention, for easier kvp notation
    try{
        const cachedDrawingData = await cache.hGet(`Whiteboard${whiteboardFromId}:${drawingKeyDelete}`, "data")
        if(cachedDrawingData){
            await cache.del(`Whiteboard${whiteboardFromId}:${drawingKeyDelete}`) //remove from cache 
            const deletedDrawing = await db.deleteDrawing(drawingKeyDelete);
            if(!deletedDrawing){
                //Given that our query returns a value, we simply check if it doesnt exist(shows that whiteboard was NOT deleted)
                return res.status(500).json({message: `Failed to delete drawing ${drawingKeyDelete} in whiteboard: ${whiteboardFromId}... Aborting task`})
            }
            return res.status(200).json({message: `Successfuly removed drawing ${drawingKeyDelete} from whiteboard: ${whiteboardFromId}`});
        }
    }catch(err){
        return res.status(500).json({message: `Internal server error while deleting drawing: ${err}`})
    }

})

router.post("/newdrawing", async(req, res) =>{
    const { drawingData, whiteboardToAdd} = req.body;
    const drawingKeyAdd = await db.createDrawing(drawingData, whiteboardToAdd) //Add to database first
        //Given that we return the Id of the drawing after creation, we can set drawingKeyAdd to this outputted value
        //Might want to add a verification fetch to make sure we don't add null to cache,
        //And make everything go bonkers
        await cache.hSet(`Whiteboard${whiteboardToAdd}:${drawingKeyAdd}`, "data", JSON.stringify(drawingData)) //Set cache
        await cache.expire(`Whiteboard${whiteboardToAdd}:${drawingKeyAdd}`, 3600);
        return res.status(200).json({drawingObject: drawingKeyAdd})
    // try{
        
    // }catch(err){
    //     return res.status(500).json({message: `Internal server error while adding drawing: ${err}`})
    // }
})

module.exports = router;