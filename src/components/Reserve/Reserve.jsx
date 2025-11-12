import React from 'react'
import styles from "./Reserve.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function Reserve() {
    return (
        <>
            <section className={styles.reserve}>
                <Image
                    className={styles.reserve_back}
                    src="/images/reserve.jpg"
                    alt="店内写真"
                    fill
                />
                <div className={styles.content}>
                    <h2 className={styles.ttl}>Reserve</h2>
                    <p className={styles.text}>
                        Cafe Rivieraは<br />
                        完全予約制ですので事前に予約<br />
                        をしてご来場ください。
                    </p>
                    <div className={styles.btn}>
                        <Link className={styles.reserve_btn} href="/reserve">Reserve</Link>
                        <Link className={styles.contact_btn} href="/contact">Contact</Link>
                    </div>
                </div>
            </section>
        </>
    )
}