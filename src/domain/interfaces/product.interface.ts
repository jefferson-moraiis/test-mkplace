export interface IProduct {
    name: string
    brand: string
    vendor: string
    price: number
}

export interface IProductRepository {
    add: (product: IProduct) => string
}