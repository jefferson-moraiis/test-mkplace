export class Product {
  id?: string;
  name: string
  brand: string
  vendor: string
  price: number
  createdAt?: Date
  updatedAt?: Date

  private constructor(product: Product) {
    return Object.assign(this, {product});
  }

  static create({name,brand,vendor,price}: Product) {
    return new Product({name,brand,vendor,price})
  }
}

