import {FC} from "react";

import {IReviews} from "@/utils/types";

import styles from './style.module.scss'

const Reviews: FC<{ reviews: IReviews[] }> = ({reviews}) => {
    return (
        <div className={styles.reviewPart}>
            {reviews.map((review: IReviews, index: number) => {
                return <div className={styles.singleReview}>
                    <div dangerouslySetInnerHTML={{__html: review.text}}></div>
                </div>

            })}
        </div>
    )
}

export default Reviews