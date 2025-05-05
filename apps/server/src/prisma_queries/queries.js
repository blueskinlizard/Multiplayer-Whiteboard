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
        select:{
            DrawingData: true
        }
    })
}
export const deleteDrawing = async(drawingKeyParam) =>{
    return await prisma.drawing.delete({
        //Given how fast Redis is, I'm not worried about
        //Optimizing by searching through a specific whiteboard, 
        //Rather than the whole Db
        where:{
            id: drawingKeyParam
        }
    })
}
export const deleteWhiteboard = async(whiteboardKeyParam) =>{
    return await prisma.whiteboard.delete({
        where:{
            id: whiteboardKeyParam
        }
    })
}
export const addWhiteboard = async(drawingKeyParam, whiteboardIdParam) =>{
    return await prisma.drawing.create({
        data:{
            Whiteboard: { connect: { id: whiteboardIdParam} },
        }
    })
}