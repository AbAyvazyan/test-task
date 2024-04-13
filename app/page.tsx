import Reviews from "@/components/Reviews";

import {getOrders, getReviews} from "@/actions/allActions";
import Order from "@/components/Order";
import Content from "@/components/Content";

import styles from "./page.module.scss";

export default async function Home() {
    const reviews = await getReviews()
    const orders = await getOrders()
    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>тестовое задание</h1>
            <Reviews reviews={reviews!}/>
            <Order/>
            <Content products={orders?.products!}/>
        </main>
    );
}
