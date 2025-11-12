import React from 'react'
import styles from './NewsCard.module.css';
import Link from 'next/link';

export default function NewsCard({url, date, category, title}) {
    return (
        <>
            <Link href="/" className={styles.content}>
                <div className={styles.date_category}>
                    <p className={styles.date}>{date}</p>
                    <p className={styles.category}>{category}</p>
                </div>
                <p className={styles.text}>{title}</p>
            </Link>
        </>
    )
}
