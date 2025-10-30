import React from 'react'
import styles from './NewsCard.module.css';
import Link from 'next/link';

export default function NewsCard() {
    return (
        <>
            <Link href="{}" className={styles.content}>
                <div className={styles.date_category}>
                    <p className={styles.date}>2025/10/8</p>
                    <p className={styles.category}>New Topics</p>
                </div>
                <p className={styles.text}>リヴィエラ特製抹茶ラテが登場しました！クリーミーでリッチな味わいをぜひお試しください</p>
            </Link>
        </>
    )
}
