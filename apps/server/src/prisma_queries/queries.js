import { PrismaClient } from '../generated/prisma/index.js'; 
const prisma = new PrismaClient();

export const createUser = async (name, hashedPassword) => {
    return await prisma.User.create({
        data: {
            name: name.toLowerCase(),
            password: hashedPassword
        }
    })
}
export const findUserByName = async(paramName) =>{
    return await prisma.User.findFirst({
        where: {
            name: paramName.toLowerCase()
        }
    })
}
export const findUserById = async(paramId) =>{
    return await prisma.User.findUnique({
        where: {
            id: paramId
        }
    })
}
