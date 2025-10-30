import React from 'react'
import styles from "./PageHeading.module.css";

export default function PageHeading() {
    return (
        <>
            <div className={styles.heading}>
                <h2 className={styles.en}>News</h2>
                <h3 className={styles.ja}>お知らせ</h3>
            </div>
        </>
    )
}
