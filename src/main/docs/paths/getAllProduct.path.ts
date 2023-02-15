export const getAllProduct = {
  get: {
    tags: ['Produtos'],
    summary: 'API pega todos produto',
    parameters: [
      {
        name: "name",
        in: "query",
        type: "string"
      },
      {
        name: "brand",
        in: "query",
        type: "string"
      },
      {
        name: "vendor",
        in: "query",
        type: "string"
      },
      {
        name: "price",
        in: "query",
        type: "string"
      },
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/outputSuccessProduct'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}