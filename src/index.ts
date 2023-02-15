export interface IProduct {
  name: string
  brand: string
  vendor: string
  price: number
}

export interface IProductRepository {
  add: (product: IProduct) => string 
}

export class ProductRepository implements IProductRepository {
  add (product: IProduct): string {
    return 'ok'
  }
}

export class ProductsService {
  constructor (private readonly repository: IProductRepository) {

  }

  async createProduct (product: IProduct): Promise<string | Error> {
    return await this.repository.add(product)
  }
}
const validateSchema = (schema:any) =>{
  let error: string | null = null;
  Object.keys(schema).forEach(item => {
    if (!schema[item] && ![item]) {
        error = (`${item} cannot be empty`);
    }
  })
  return error
}


export class ProductsController {
  constructor (private readonly service: ProductsService) { }

  async create (product:  IProduct){
    const {name, brand, vendor, price} = product
    
    validateSchema(product)
    
    return await this.service.createProduct(product)
  }
}
