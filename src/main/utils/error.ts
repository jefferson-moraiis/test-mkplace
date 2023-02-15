export const errorResult = (error) => {
    return {
        statusCode: error.status,
        data: {
            status: error.status,
            message: error.message,
            stack: error.stack
        }
    }
}