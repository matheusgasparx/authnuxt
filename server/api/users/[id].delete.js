import { deleteUser } from "~/server/repository/users"

export default defineEventHandler(async (event) => {
    const id = event.context.params.id

    if(!id){
        return sendError(
            event,
            createError({
                statusCode: 406,
                statusMessage: "ID Obrigatorio"
            })
        )
    }

    await deleteUser(id)

    return {
        success: true,
        data: 'Usuário foi de base!'
    }
})