import React from 'react';
import styles from "./Footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <section className={styles.footer}>
                <Image
                    className={styles.footer_back}
                    src="/images/footer_back.jpg"
                    alt="フッター背景"
                    fill
                />
                <div className={styles.content}>
                    <nav className={styles.footer_nav}>
                        <ul className={styles.f_nav_list}>
                            <li className={styles.f_nav_item}>
                                <Link className={styles.item_btn} href="/">Home</Link>
                            </li>
                            <li className={styles.f_nav_item}>
                                <Link className={styles.item_btn} href="/#menu">Menu</Link>
                            </li>
                            <li className={styles.f_nav_item}>
                                <Link className={styles.item_btn} href="/news">News</Link>
                            </li>
                            <li className={styles.f_nav_item}>
                                <Link className={styles.item_btn} href="/#access">Access</Link>
                            </li>
                        </ul>
                        <Link className={styles.insta} href="https://www.instagram.com/">
                            <Image
                                src="/images/instagram.svg"
                                alt='インスタグラム'
                                width={40}
                                height={40}
                            />
                        </Link>
                    </nav>
                    <h2 className={styles.footer_logo}>CAFE RIVIERA</h2>
                </div>
            </section>
        </>
    )
}