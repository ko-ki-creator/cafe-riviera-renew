import React from 'react';
import styles from "./SecondView.module.css";
import Image from 'next/image';

export default function SecondView() {
    return (
        <>
            <section className={styles.second_view}>
                    <Image
                        src="/images/fv_second/back.jpg"
                        alt="店内の写真"
                        className={styles.second_back}
                        fill
                    />
                    <div className={styles.container}>
                        <h2>
                            都会のオアシス<br />
                            カフェ・リヴィエラで<br />
                            心安らぐひとときを
                        </h2>
                        <p>
                            私たちのカフェは、日々の忙しさを忘れ、<br />
                            ゆったりとした時間を楽しむ場所です。<br />
                            洗練された空間で、美味しいコーヒーと共に<br />
                            リラックスしてください。
                        </p>
                        <div className={styles.album}>
                            <Image
                                className={styles.album_item}
                                src="/images/fv_second/img1.jpeg"
                                alt='店内の写真'
                                width={165}
                                height={200}
                            />
                            <Image
                                className={styles.album_item}
                                src="/images/fv_second/img2.jpeg"
                                alt='コーヒーを淹れてる写真'
                                width={165}
                                height={200}
                            />
                            <Image
                                className={styles.album_item}
                                src="/images/fv_second/img3.jpeg"
                                alt='店内装飾のドライフラワー'
                                width={165}
                                height={200}
                            />
                            <Image
                                className={styles.album_item}
                                src="/images/fv_second/img4.jpeg"
                                alt='窓際のテーブル席'
                                width={165}
                                height={200}
                            />
                            <Image
                                className={styles.album_item}
                                src="/images/fv_second/img5.jpeg"
                                alt='温かみのあるライト'
                                width={165}
                                height={200}
                            />
                            <Image
                                className={styles.album_item}
                                src="/images/fv_second/img6.jpeg"
                                alt='カフェオレ'
                                width={165}
                                height={200}
                            />
                        </div>
                    </div>
            </section>
        </>
    )
}