interface IReviews {
    id: number,
    text: string
}

interface IErrorApi {
    success: boolean,
    message: string
}

interface IProduct {
    id: number,
    image_url: string,
    title: string,
    description: string,
    price: number
}

interface IProductApiResult {
    page: number,
    amount: number,
    total: number,
    products: IProduct[]
}

interface IOrderResponse {
    success: number,
    error?: string
}

interface ICartStorage {
    count: number,
    id: number,
    price: number,
    productName: string
}

export type {IReviews, IErrorApi, IProduct, IProductApiResult, IOrderResponse,ICartStorage }