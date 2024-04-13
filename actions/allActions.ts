'use server'
import {ICartStorage, IOrderResponse, IProductApiResult, IReviews} from "@/utils/types";

const apiUrl: string = process.env.NEXT_PUBLIC_URL

const getReviews = async (): Promise<IReviews[] | undefined> => {
    try {
        const response = await fetch(`${apiUrl}/reviews`)
        return response.json()
    } catch (e) {
        console.error({success: false, message: e.message})
    }
}

const getOrders = async (): Promise<IProductApiResult | undefined> => {
    try {
        const response = await fetch(`${apiUrl}/products?page=1&page_size=20`)
        return response.json()
    } catch (e) {
        console.error({success: false, message: e.message})
    }
}

const orderAction = async (phone: number, cart: ICartStorage[]): Promise<IOrderResponse> => {
    try {
        const filteredCart = cart.map(({ id, count }) => ({ id, quantity:count }));
        const response = await fetch(`${apiUrl}/order`, {
            method: 'POST',
            body: JSON.stringify({phone, cart:filteredCart})
        })
        return response.json()
    } catch (e) {
        console.error({success: false, message: e.message})
    }
}

export {getReviews, getOrders, orderAction}