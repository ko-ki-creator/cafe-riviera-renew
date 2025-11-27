import React from 'react'
import styles from "./Mobile.module.css";
import HamMenu from '../HamMenu/HamMenu';

export default function Mobile({ children }) {
    return (
        <>
            <div className={styles.mobile_container}>
                <HamMenu />
                {children}
            </div>
        </>
    )
}
