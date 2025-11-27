import React from 'react';
import styles from "./News.module.css";
import Link from 'next/link';
import NewsCard from '../NewsCard/NewsCard';

export default function News() {
    return (
        <>
            <section className={styles.news} id='news'>
                <h2 className="ttl">News</h2>
                <NewsCard
                    url="/posts/article_one"
                    date="2025/10/8"
                    category="New Topics"
                    title="リヴィエラ特定抹茶ラテが登場しました！クリーミーでリッチな味わいをぜひお試しください"
                />
                <Link className={styles.btn} href="/news">News All</Link>
            </section>
        </>
    )
}