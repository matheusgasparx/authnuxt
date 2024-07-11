import { createUser } from "~/server/repository/users"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { name, email, password, confirmPassword } = body

    if (!name, !email, !password, !confirmPassword) {
        return sendError(
            event,
            createError({
                statusCode: 406,
                statusMessage: 'Campos Obrigatorios'
            })
        )
    }

    if(password !== confirmPassword) {
        return sendError(
            event,
            createError({
                statusCode: 406,
                statusMessage: 'As senhas não conferem'
            })
        )
    }

    const data = await createUser({
        name,
        email,
        password
    })

    return {
        success: true,
        data
    }
})