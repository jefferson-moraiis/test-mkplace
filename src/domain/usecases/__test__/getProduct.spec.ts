import { GetProductsUsecases } from '..'
import { IProductRepository } from '../../interfaces/product.interface'
import { ProductRepository } from '../../../infra/repositories/addProduct.repository'
describe('GetProductUsecases', () => {

  let repository: IProductRepository
  let service: GetProductsUsecases

  beforeAll(() => {
    repository = new ProductRepository()
    service = new GetProductsUsecases(repository)
  });

  it('should return array products', async () => {
    const productData = {
      name: 'Test Product',
      brand: 'Test Brand',
      vendor: 'Test Vendor',
      price: 100
    }
    jest.spyOn(repository, 'getAll').mockResolvedValue(Promise.resolve([productData]))
    const product = await service.getAllProducts()

    expect(repository.getAll).toHaveBeenCalledTimes(1)
    expect(product).toEqual([productData])
  })
  it('should return one products', async () => {
    const productData = {
      name: 'Test Product',
      brand: 'Test Brand',
      vendor: 'Test Vendor',
      price: 100
    }
    jest.spyOn(repository, 'getById').mockResolvedValue(Promise.resolve(productData))
    const product = await service.getProductById('_id')
    expect(repository.getById).toHaveBeenCalledTimes(1)
    expect(product).toEqual(productData)
  })

  it('should return array filtered products', async () => {
    const productData = {
      name: 'Test Product',
      brand: 'Test Brand',
      vendor: 'Test Vendor',
      price: 100
    }
    jest.spyOn(repository, 'getFiltered').mockResolvedValue(Promise.resolve([productData]))
    const product = await service.getProductFiltered(productData)
    expect(repository.getFiltered).toHaveBeenCalledTimes(1)
    expect(product).toEqual([productData])
  })

})
