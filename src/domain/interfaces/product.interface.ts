export interface IProduct {
    id?: string;
    name: string
    brand: string
    vendor: string
    price: number
    createdAt?: Date
    updatedAt?: Date
}

export interface IProductFilter {
    name: string
    brand: string
    vendor: string
    price: number
}

export interface IProductRepository {
    add: (product: IProduct) => Promise<IProduct>
    getAll(): Promise<IProduct[]>
    getById(id: string): Promise<IProduct>
    getFiltered(filter: any[]): Promise<IProduct[]>
    update(product: IProduct): Promise<IProduct>
    delete(id: string): Promise<boolean>
}