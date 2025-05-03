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
        select: {
            //Still deciding what goes here
        }
    })
}
export const findUserById = async(paramId) =>{
    return await prisma.user.findUnique({
        where: {
            id: paramId
        },
        select: {
            //Still deciding what goes here
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