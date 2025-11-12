import React from 'react'
import styles from "./PageHeading.module.css";

export default function PageHeading({ title, sub_ttl }) {
    return (
        <>
            <div className={styles.heading}>
                <h2 className={styles.en}>{title}</h2>
                <h3 className={styles.ja}>{sub_ttl}</h3>
            </div>
        </>
    )
}
