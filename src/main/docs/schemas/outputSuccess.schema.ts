export const outputSuccess = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            default: ''
        },
        name: {
            type: 'string',
            default: ''
        },
        brand: {
            type: 'string',
            default: ''
        },
        vendor: {
            type: 'string',
            default: ''
        },
        price: {
            type: 'string',
            default: ''
        },
        createdAt: {
            type: 'string',
            default: ''
        },
        updateAt: {
            type: 'string',
            default: ''
        }
    },
    required: ['id','name', 'brand', 'vendor', 'price','updateAt','createdAt'],
}
