import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = async (name: string, hashedPassword: string) => {
    return await prisma.User.create({
        data: {
            name: name.toLowerCase(),
            password: hashedPassword
        }
    })
}
export const findUserByName = async(paramName: string) =>{
    return await prisma.User.findFirst({
        where: {
            name: paramName.toLowerCase()
        }
    })
}
export const findUserById = async(paramId: string) =>{
    return await prisma.User.findUnique({
        where: {
            id: paramId
        }
    })
}