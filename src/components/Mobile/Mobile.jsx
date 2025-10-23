import React from 'react'
import styles from "./Mobile.module.css";

export default function Mobile({ children }) {
    return (
        <>
            <div className={styles.mobile_container}>
                {children}
            </div>
        </>
    )
}
