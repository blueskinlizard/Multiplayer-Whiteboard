import { PrismaClient } from '../generated/prisma/index.js'; 
const prisma = new PrismaClient();

export const createUser = async (name, hashedPassword) => {
    return await prisma.user.create({
        data: {
            name: name.toLowerCase(),
            password: hashedPassword
        }
    })
}
export const findUserByName = async(paramName) =>{
    return await prisma.user.findFirst({
        where: {
            name: paramName.toLowerCase()
        },
    })
}
export const findUserById = async(paramId) =>{
    return await prisma.user.findUnique({
        where: {
            id: paramId
        }
    })
}
export const createWhiteboard = async(paramUser, paramName) =>{
    return await prisma.whiteboard.create({
        data:{
            Owner: { connect: { id: paramUser.id } },
            name: paramName
        },
        select: {
            id: true
        }
    })
}
export const findUserWhiteboards = async(paramUser) =>{
    return await prisma.user.findFirst({
        where: {
            id: paramUser.id
        },
        select: {
            Whiteboard: true,
        }
    })
}
export const findDrawingData = async(drawingKeyParam) =>{
    return await prisma.drawing.findUnique({
        where:{
            id: drawingKeyParam
        },
        //Retrieve all primitive obj. data
    })
}
export const deleteDrawing = async(drawingKeyParam) =>{
    return await prisma.drawing.delete({
        //Given how fast Redis is, I'm not worried about
        //Optimizing by searching through a specific whiteboard rather than
        //via the whole db
        where:{
            id: drawingKeyParam
        }
    })
}
export const deleteWhiteboard = async(whiteboardKeyParam) =>{
    return await prisma.whiteboard.delete({
        where:{
            id: whiteboardKeyParam
        },
        select:{
            id: true
            //Ran to set variable, just to confirm query went through 
        }
    })
}
export const createDrawing = async(drawingKeyParamData, whiteboardIdParam) =>{
    return await prisma.drawing.create({
        data:{
            Whiteboard: { connect: { id: whiteboardIdParam} },
            DrawingData: drawingKeyParamData.strokeData,
            ...(drawingKeyParamData.id && { id: drawingKeyParamData.id }),
            //Sets drawing id based on UUID if not present, and based off params if so
        },
        select: {
            id: true
            //Return ID to set up a /getdrawing AND call if needed
        }
    })
}
export const findWhiteboardDrawings = async(whiteboardIdParam) =>{
    return await prisma.whiteboard.findUnique({
        where:{
            id: whiteboardIdParam
        },
        select:{
            Drawings:{
                select:{
                    id: true
                }
            }
        }
    })
}
export const findWhiteboardOwner = async(whiteboardIdParam) =>{
    return await prisma.whiteboard.findFirst({
        where:{
            id: whiteboardIdParam
        },
        select:{
            Owner: true
        }
    })
}
export const findSharedWhiteboards = async(userIdParam, whiteboardIdParam) =>{
    return await prisma.whiteboardShare.findMany({
        where: {
            SharerId: userIdParam,
            ...(whiteboardIdParam && { WhiteboardId: whiteboardIdParam }) 
            //When we want to verify if a user is shared to a specific whiteboard, then we may want to search via a whiteboardID
            //This will allow us to return the raw data in a more streamlined way, allowing us to see who it was shared with easier. 
        }
    })
}