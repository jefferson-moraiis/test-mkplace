import { ProductRepository } from "../addProduct.repository";
import { ProductModel } from "../../database/mongodb/models/products.model";

describe('ProductRepository', () => {
    const product = {
        "_id": "63ec870bacef1790bbb96ece",
        "name": "Camiseta",
        "brand": "Polo",
        "vendor": "Luiz",
        "price": 100,
        "createdAt": "2023-02-15T07:17:31.027Z",
        "updatedAt": "2023-02-15T07:17:31.027Z",
        "__v": 0
    }

    beforeAll(() => {
        ProductModel.find = jest.fn().mockResolvedValue(Promise.resolve([product]))
        ProductModel.findById = jest.fn().mockResolvedValue(Promise.resolve(product))
        ProductModel.create = jest.fn().mockResolvedValue(Promise.resolve(true))
        ProductModel.findOneAndUpdate = jest.fn().mockResolvedValue(Promise.resolve(product))
        ProductModel.findByIdAndDelete= jest.fn().mockResolvedValue(Promise.resolve(true))
    });
    it('should return array of product', async () => {
        const sut = await new ProductRepository().getAll()
        expect(sut).toEqual([product])
    })
    it('should return one of product', async () => {
        const sut = await new ProductRepository().getById('_id')
        expect(sut).toEqual(product)
    })
    it('should return list filtered product', async () => {
        const query =[ 
            {name: 'Camiseta'},
            {price: 100}
        ]
        const sut = await new ProductRepository().getFiltered(query)
        expect(sut).toEqual([product])
    })

    it('should return true once create product', async () => {
        const productData = {
            name: 'Test Product',
            brand: 'Test Brand',
            vendor: 'Test Vendor',
            price: 100
        }
        const sut = await new ProductRepository().add(productData)
        expect(sut).toBe(true)
    })
    it('should return new product updated', async () => {
        const productData = {
            name: 'Product',
            brand: 'Brand',
            vendor: 'Vendor',
            price: 100
        }
        const sut = await new ProductRepository().update(productData)
        expect(sut).toBe(product)
    })
    it('should return true once delete product', async () => {
        const sut = await new ProductRepository().delete('_id')
        expect(sut).toBe(true)
    })
})