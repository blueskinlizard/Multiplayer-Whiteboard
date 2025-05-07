const db = require("../prisma_queries/queries.js")
const express = require('express')

const router = express.Router();

router.get("/currentuser", async(req, res) =>{
    try{
        return res.status(200).json({ currentUser: req.user })
        //Just return current passport session user values
    }catch(err){
        return res.status(500).json({message: `Internal server error while getting current user, error: ${err}`})
    }
})
router.get("/fetchwhiteboardusers", async(req, res) =>{
    const { whiteboardToSearch } = req.body;
    try{
        const whiteboardOwner = await db.findWhiteboardOwner(whiteboardToSearch);
        if(!whiteboardOwner){
            return res.status(404).json({ message: `Whiteboard owner not found, status 404`})
        }
        return res.status(200).json({ whiteboardOwner: whiteboardOwner})
    }catch(err){
        return res.status(500).json({message: `Internal server error while getting Whiteboard: ${whiteboardToSearch} owner`})
    }
})

module.exports = router;


