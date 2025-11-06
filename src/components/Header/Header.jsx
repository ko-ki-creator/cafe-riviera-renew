import React from 'react'
import styles from "./Header.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <Image
                        className={styles.mv_back}
                        src="/images/mv_fixed.jpg"
                        alt='カフェ・リヴィエラ店内'
                        fill
                    />
                    <div className={styles.container}>
                        <div className={styles.logo_copy}>
                            <Image
                                className={styles.logo_white}
                                src="/images/logo_white.png"
                                alt='カフェ・リヴィエラのロゴ'
                                width={200}
                                height={248}
                            />
                            <h2 className={styles.mv_copy}>
                                都会のオアシス<br />
                                カフェ・リヴィエラで<br />
                                心安らぐひとときを
                            </h2>
                        </div>
                        <div className={styles.sub_copy}>
                            <h3>
                                自然焙煎のコーヒーと手作りで、<br />
                                心地よい時間をお過ごしください。
                            </h3>
                            <p>
                                私たちのカフェは、日々の忙しさを忘れ、ゆったりとした時間を楽しむ場所です。洗練された空間で、美味しいコーヒーと共にリラックスしてください。
                            </p>
                        </div>
                        <nav className={styles.nav}>
                            <ul className={styles.nav_list}>
                                <li className={styles.nav_item}>
                                    <Link className={styles.item_btn} href="/">Home</Link>
                                </li>
                                <li className={styles.nav_item}>
                                    <Link className={styles.item_btn} href="/#menu">Menu</Link>
                                </li>
                                <li className={styles.nav_item}>
                                    <Link className={styles.item_btn} href="/news">News</Link>
                                </li>
                                <li className={styles.nav_item}>
                                    <Link className={styles.item_btn} href="/#access">Access</Link>
                                </li>
                            </ul>
                            <Link className={styles.reserve_btn} href="">Reserve</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
