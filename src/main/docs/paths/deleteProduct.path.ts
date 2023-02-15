export const deleteProduct = {
  delete: {
    tags: ['Produtos'],
    summary: 'API pega produto por id',
    parameters: [
      {
        name: "id",
        in: "path",
        require:true,
        type: "string"
      }
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/outputSuccessString'
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