export class Product {
  id?: string;
  name: string
  brand: string
  vendor: string
  price: number
  createdAt?: Date
  updatedAt?: Date

  private constructor({ name, brand, vendor, price, id, createdAt, updatedAt }: Product) {
    return Object.assign(this, {
      name, brand, vendor, price, id, createdAt, updatedAt
    });
  }

  static create({ name, brand, vendor, price, id, createdAt, updatedAt }: Product) {
    return new Product({ id,name, brand, vendor, price, createdAt, updatedAt })
  }


}

