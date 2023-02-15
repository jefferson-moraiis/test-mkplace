import { ProductsController, ProductsService, type IProductRepository } from '../src/index'

const productRepositoryMock: jest.Mocked<IProductRepository> = {
  add: jest.fn()
}

const factoryMock = () => {
    const productsServiceMock = new ProductsService(productRepositoryMock)
    return new ProductsController(productsServiceMock)
}

// const productsServiceMock = 

describe('ProductsController', () => {
  it('should return create user success', async () => {
    productRepositoryMock.add.mockReturnValueOnce('')
    const sut = factoryMock()
    const product = await sut.create({ name: 'test', brand: 'test', vendor: 'test', price: 10 })

    expect(productRepositoryMock.add).toHaveBeenCalledTimes(1)
    expect(product).toEqual('')
  })

  it('should return not create user', async () => {
    productRepositoryMock.add.mockReturnValueOnce('not create user')
    const sut = factoryMock()
    const product = await sut.create({ } as any)
    expect(productRepositoryMock.add).toHaveBeenCalledTimes(1)
    expect(product).toEqual('not create user')
  })
})
