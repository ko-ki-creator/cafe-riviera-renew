import React from 'react'
import styles from "./Infomation.module.css"

export default function Infomation() {
    return (
        <>
            <section className={styles.infomation}>
                <h2 className="ttl">Infomation</h2>
                <div className={styles.content}>
                    <div className={styles.group}>
                        <p>施設名：</p>
                        <p className={styles.bold}>Cafe Riviera（カフェ・リヴィエラ）</p>
                    </div>
                    <div className={styles.group}>
                        <p>住所：</p>
                        <p className={styles.bold}>〒123-4567<br />東京都新宿区新宿町1-2-3</p>
                    </div>
                    <div className={styles.group}>
                        <p>電話番号：</p>
                        <p className={styles.bold}>03-1234-5678</p>
                    </div>
                    <div className={styles.group}>
                        <p>定休日：</p>
                        <p className={styles.bold}>火曜日</p>
                    </div>
                    <div className={styles.group}>
                        <p>メールアドレス：</p>
                        <p className={styles.bold}>info@caferiviera.jp</p>
                    </div>
                </div>
            </section>
        </>
    )
}
