export default defineEventHandler((event) => {
    const openEndPoints = ["/api/users/register", "/"]
    // substituir aqui os endPoints para as paginas fechadas

    if(openEndPoints.includes(event.req.url)) {
        return
    }

    const authorization = getHeader(event, "authorization")

    if(!authorization) {
        return sendError(
            event,
            createError({
                statusCode: 401,
                statusMessage: "Usuário não autenticado!"
            })
        )
    }
})