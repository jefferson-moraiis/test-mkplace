export interface IProduct {
    id?: string;
    name: string
    brand: string
    vendor: string
    price: number
    createdAt?: Date
    updatedAt?: Date
}

export interface IProductRepository {
    add: (product: IProduct) => string
    getAll(): Promise<IProduct[]>
    getById(id: string): Promise<IProduct>
}