import { AddProductsUsecases } from '../addProduct.usecases'
import { IProductRepository } from '../../interfaces/product.interface'
import { ProductRepository } from '../../../infra/repositories/addProduct.repository'
import { Product } from '../../entities/product.entity'
describe('AddProductUsecases', () => {

  let repository: IProductRepository
  let service: AddProductsUsecases

  beforeAll(() => {
    repository = new ProductRepository()
    service = new AddProductsUsecases(repository)
  });

  it('should return create product success', async () => {
    const productData = {
      name: 'Test Product',
      brand: 'Test Brand',
      vendor: 'Test Vendor',
      price: 100
    }
    jest.spyOn(repository, 'add').mockResolvedValue(Product.create(productData))
    const product = await service.createProduct(Product.create(productData))
    expect(repository.add).toHaveBeenCalledTimes(1)
    expect(product).toEqual(productData)
  })


})
