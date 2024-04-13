'use client'
import React, {ChangeEvent, FormEvent, useCallback, useEffect, useState} from "react";
import {truncateString} from "@/utils/truncateString";
import {orderAction} from "@/actions/allActions";
import {ICartStorage} from "@/utils/types";

import styles from './style.module.scss'

const Order = () => {
    const [number, setNumber] = useState<string>('7')
    const [cart, setCart] = useState<ICartStorage[]>([])

    useEffect(() => {
        const storageCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storageCart)
    }, [number])

    const formSubmitHandler = useCallback(async (e: FormEvent) => {
        e.preventDefault()
        if (number.length !== 10 && !cart.length) {
            return
        }
        const response = await orderAction(+number, cart)
        alert(response.error ? response.error : 'success')
        localStorage.removeItem('cart')
        setNumber('7')
    }, [cart, number])

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'cart') {
                setCart(JSON.parse(event.newValue));
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    return (
        <div className={styles.order}>
            <p>Добавленные товары</p>
            <div className={styles.goods}>
                {cart.length ? cart.map((singleCart: any) => {
                    return <div key={singleCart.productName}>
                        <span>{truncateString(singleCart.productName, 15)}</span>
                        <span>x{singleCart.count}</span>
                        <span>{singleCart.price}₽</span>
                    </div>
                }) : null}
            </div>
            <form className={styles.contact} onSubmit={formSubmitHandler}>
                <input value={number}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => typeof +e.target.value === 'number' && e.target.value.length <= 10 && setNumber(e.target.value)}/>
                <button>заказать</button>
            </form>
        </div>
    )
}

export default Order