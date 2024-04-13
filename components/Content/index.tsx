import {FC} from "react";
import Image from "next/image";

import BuyCounter from "@/components/BuyCounter";
import {IProduct} from "@/utils/types";

import styles from './style.module.scss'

const Content: FC<{ products: IProduct[] }> = ({products}) => {
    return (<section className={styles.content}>
        {products.map((singleProduct: IProduct) => {
            return <div key={singleProduct.id}>
                <div className={styles.imageHolder}>
                    <Image alt={singleProduct.image_url}
                           src={singleProduct.image_url}
                           layout={'fill'}/>
                </div>
                <h3>{singleProduct.title}</h3>
                <p>
                    {singleProduct.description}
                </p>
                <div className={styles.cardBottom}>
                    <div className={styles.price}>
                        цена:{singleProduct.price}₽
                    </div>
                    <BuyCounter price={singleProduct.price} productName={singleProduct.title} id={singleProduct.id}/>
                </div>
            </div>
        })}

    </section>)
}

export default Content