'use server'
import { IProductApiResult, IReviews} from "@/utils/types";

const apiUrl: string = process.env.NEXT_PUBLIC_URL

const getReviews = async (): Promise<IReviews[]|undefined> => {
    try {
        const response = await fetch(`${apiUrl}/reviews`)
        return response.json()
    } catch (e) {
        console.log({success: false, message: e.message})
    }
}

const getOrders = async (): Promise<IProductApiResult|undefined> => {
    try {
        const response = await fetch(`${apiUrl}/products?page=1&page_size=20`)
        return response.json()
    } catch (e) {
        console.log({success: false, message: e.message})
    }
}

export {getReviews,getOrders}