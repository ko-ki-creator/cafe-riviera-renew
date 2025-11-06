import React from 'react'
import styles from "./ArticleCard.module.css"
import Image from 'next/image'

export default function ArticleCard({ date, category, title, text }) {
    return (
        <>
            <section className={styles.article}>
                <article className={styles.content}>
                    <div className={styles.date_category}>
                        <p className={styles.date}>{date}</p>
                        <p className={styles.category}>{category}</p>
                    </div>
                    <div className={styles.detail}>
                        <h2 className={styles.title}>{title}</h2>
                        <Image
                            className={styles.detail_img}
                            src="/images/news/Matcha_latte.jpeg"
                            alt="リヴィエラ特定抹茶ラテ"
                            width={315}
                            height={180}
                        />
                        <p className={styles.text}>{text}</p>
                    </div>
                </article>
            </section>
        </>
    )
}