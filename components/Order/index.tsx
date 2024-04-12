import styles from './style.module.scss'

const Order = () => {
    return (
        <div className={styles.order}>
            <p>Добавленные товары</p>
            <div className={styles.goods}>
                <div>
                    <span>товар 1</span>
                    <span>x3</span>
                    <span>3645₽</span>
                </div>
                <div>
                    <span>товар 1</span>
                    <span>x3</span>
                    <span>3645₽</span>
                </div>
            </div>
            <form className={styles.contact}>
                <input value={'+7 '}/>
                <button>заказать</button>
            </form>
        </div>
    )
}

export default Order