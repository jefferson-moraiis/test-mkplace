import { UpdateProductUsecases } from '..'
import { IProductRepository } from '../../interfaces/product.interface'
import { ProductRepository } from '../../../infra/repositories/addProduct.repository'
import { Product } from '../../entities/product.entity'
describe('UpdateProductUsecases', () => {

  let repository: IProductRepository
  let service:  UpdateProductUsecases 


  beforeAll(() => {
    repository = new ProductRepository()
    service = new UpdateProductUsecases(repository)
  });

  it('should return update product success', async () => {
    const productData = {
      id: '123456',
      name: 'Test Product',
      brand: 'Test Brand',
      vendor: 'Test Vendor',
      price: 100
    }
    jest.spyOn(repository, 'update').mockResolvedValue(Product.create(productData))
    const product = await service.updateProduct(Product.create(productData))
    expect(repository.update).toHaveBeenCalledTimes(1)
    expect(product).toEqual(productData)
  })
  it('should return id is required', async () => {
    const productData = {
      name: 'Test Product',
      brand: 'Test Brand',
      vendor: 'Test Vendor',
      price: 100
    }
    jest.spyOn(repository, 'update').mockRejectedValueOnce(new Error("id is required"))
    try {
      await service.updateProduct(Product.create(productData))
    } catch (error) {
      expect(error.message).toEqual('id is required')
    }
    
    expect(repository.update).toHaveBeenCalledTimes(0)
    
  })


})
