'use client'
import React, {FC, useEffect, useState} from "react";
import styles from './styles.module.scss'

const BuyCounter: FC<{ id: number, productName: string, price: number }> = ({id, productName, price}) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        cart = JSON.parse(window.localStorage.getItem('cart')) || []
    }
    const existingProductIndex = cart.findIndex(item => item.productName === productName);
    const [isButton, setIsButton] = useState<boolean>(true)
    const [counterValue, setCounterValue] = useState<number>(cart?.[existingProductIndex]?.count || 1)

    useEffect(() => {
        if (isButton && counterValue === 1) {
            if (existingProductIndex !== -1) {
                cart.splice(existingProductIndex, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            return;
        }

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].count = counterValue;
        } else {
            cart.push({id, productName, price, count: counterValue});
        }

        localStorage.setItem('cart', JSON.stringify(cart));

    }, [counterValue, isButton, productName, price, cart.toString()]);
    return (
        <>
            {isButton
                ?
                <div className={styles.button} onClick={() => setIsButton(false)}>купить</div>
                :
                <div className={styles.counter}>
                    <div
                        className={styles.countButton}
                        onClick={() => counterValue > 1 ? setCounterValue(prevState => --prevState) : setIsButton(true)}
                    >
                        -
                    </div>
                    <div className={styles.countNumber}>{counterValue}</div>
                    <div
                        className={styles.countButton}
                        onClick={() => setCounterValue(prevState => ++prevState)}
                    >+
                    </div>
                </div>
            }
        </>
    )
}

export default BuyCounter