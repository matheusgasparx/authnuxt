import { prisma } from "./db"

export const createUser = async ({ name, email, password }) => {
    try {
        return prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })
    } catch (error) {
        throw new Error("Falha ao criar usuário")
    }
}

export const updateUser = async (id, { name, email }) => {
    try {
        return prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email
            }
        })
    } catch (error) {
        throw new Error("Erro ao atualizar o usuário")
    }
}

export const deleteUser = async (id) => {
    try {
        return prisma.user.delete({
            where: {
                id
            }
        })
    } catch (error) {
        throw new Error("Falha ao deletar usuário")
    }
}