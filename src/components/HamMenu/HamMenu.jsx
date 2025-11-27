import React, { useState } from 'react';
import styles from './HamMenu.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function HamMenu() {
    const [isActive, setIsActive] = useState(false);

    const handleHamClick = () => {
        setIsActive(!isActive);
    };


    return (
        <>
            <div className={`${styles.ham_wrapper} ${isActive ? styles.active : ''}`}>
                <div className={` ${styles.ham_inner} ${isActive ? styles.active : ''}`}>
                    <Link href="/" className={`${styles.logo} ${isActive ? styles.active : ''}`}>CAFE RIVIERA</Link>
                    <div className={styles.ham_container}>
                        <Link href="/#reserve" className={` ${styles.reserve} ${isActive ? styles.active : ''}`}>Reserve</Link>
                        <button
                            className={`${styles.ham_btn} ${isActive ? styles.active : ''}`}
                            id='js_ham'
                            onClick={handleHamClick}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>

                {/* ナビゲーション展開 */}
                <div className={`${styles.nav_container} ${isActive ? styles.active : ''}`} id="js_nav">
                    <nav className={styles.nav}>
                        <ul className={styles.nav_list}>
                            <li className={styles.nav_item}>
                                <Link className={styles.item_btn} href="/">Home</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link className={styles.item_btn} href="/#menu">Menu</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link className={styles.item_btn} href="/#news">News</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link className={styles.item_btn} href="/#access">Access</Link>
                            </li>
                        </ul>
                        <Link className={styles.reserve_btn} href="/#access">Reverse</Link>
                    </nav>
                    <div className={styles.overview}>
                        <p className={styles.address}>〒123-4567<br />東京都新宿区新宿町1-2-3</p>
                        <p className={styles.tel}>Tel:03-1234-5678</p>
                        <Link className={styles.insta} href="https://www.instagram.com/">
                            <Image
                                src="/images/instagram_ham.svg"
                                alt='インスタグラム'
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
