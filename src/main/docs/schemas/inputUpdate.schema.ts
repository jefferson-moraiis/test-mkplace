export const inputUpdate = {
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
        }
    },
    required: ['name', 'brand', 'vendor', 'price']
}
