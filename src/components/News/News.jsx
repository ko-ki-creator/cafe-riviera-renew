import React from 'react';
import styles from "./News.module.css";
import Link from 'next/link';
import NewsCard from '../NewsCard/NewsCard';

export default function News() {
    return (
        <>
            <section className={styles.news}>
                <h2 className="ttl">News</h2>
                {/* <div className={styles.content}>
                    <div className={styles.date_category}>
                        <p className={styles.date}>2025/10/8</p>
                        <p className={styles.category}>New Topics</p>
                    </div>
                    <p className={styles.text}>リヴィエラ特製抹茶ラテが登場しました！クリーミーでリッチな味わいをぜひお試しください</p>
                </div> */}
                <NewsCard />
                <Link className={styles.btn} href="">News All</Link>
            </section>
        </>
    )
}