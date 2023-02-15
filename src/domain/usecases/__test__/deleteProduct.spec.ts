import { DeleteProductUsecases } from '..'
import { IProductRepository } from '../../interfaces/product.interface'
import { ProductRepository } from '../../../infra/repositories/addProduct.repository'
describe('DeleteProductUsecases', () => {

  let repository: IProductRepository
  let service: DeleteProductUsecases

  beforeAll(() => {
    repository = new ProductRepository()
    service = new DeleteProductUsecases(repository)
  });

  it('should return true', async () => {
    jest.spyOn(repository, 'delete').mockResolvedValue(Promise.resolve(true))
    const product = await service.deleteProductById('_id')
    expect(repository.delete).toHaveBeenCalledTimes(1)
    expect(product).toEqual(true)
  })

})
